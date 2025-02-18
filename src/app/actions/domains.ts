'use server'

import { requestHandler } from "@/helpers/request-handler";
import { DomainType } from "@prisma/client";
import { prisma } from "@/lib/db";
import { auth } from "../(auth)/auth";
import { redirect } from "next/navigation"

// list all domains of user by getUserDomains
// if the domains include the domain  render button "go to test" of something like that, then redirect to the question page
// if not render button "start test"
// when clicked on start test call selectDomain action and pass the domaintype selected

export async function getAttemptedDomains() {
    return requestHandler(async () => {
        const session = await auth()
        if (!session?.user) {
            //todo redirect to login
            //redirect("/unprotected");
            return;
        }
        const attemptedDomains = await prisma.attemptedDomain.findMany({
            where: {
                userId: session.user.id
            },
        })

        return attemptedDomains
    })
}

export async function selectDomain(domain: DomainType) {
    return requestHandler(async () => {
        const session = await auth()
        if (!session?.user) {
            //todo redirect to login
            //redirect("/unprotected");
            return;
        }

        const existingAttempt = await prisma.attemptedDomain.findFirst({
            where: {
                domain: domain,
                userId: session.user.id
            }
        })

        if (existingAttempt) {
            return existingAttempt
        }

        const user = await prisma.user.findUnique({
            where: {
                id: session.user.id
            },
            include: {
                attemptedDomains: true
            }
        })

        if (!user) {
            throw new Error("User not found");
        }

        if (user?.attemptedDomains.length >= 2) {
            throw new Error("Cannot select more than two domains");
        }

        const selectedDomain = await prisma.attemptedDomain.create({
            data: {
                domain: domain,
                userId: user.id,
                status: 'QUESTION_ROUND',
            }
        })

        return selectedDomain
    })
}

export async function getDomainStats() {
    return requestHandler(async () => {
        const session = await auth()
        if (!session?.user) {
            redirect("/");
        }

        const user = await prisma.user.findUnique({
            where: {
                id: session.user.id,
            },
            include: {
                attemptedQuestions: {
                    include: {
                        question: true,
                    },
                },
                attemptedTasks: {
                    include: {
                        task: true,
                    },
                },
            },
        });

        if (!user) {
            throw new Error("User not found");
        }

        const domains = await Promise.all(
            Object.values(DomainType).map(async (domain) => {
                const completedQuestions = user.attemptedQuestions.filter(
                    (q) => q.question.domain === domain
                ).length;

                const totalQuestions = await prisma.question.count({
                    where: {
                        domain,
                    },
                });

                return {
                    name: domain,
                    completed: completedQuestions,
                    total: totalQuestions,
                };
            })
        );
        return {
            username: user.name,
            about: user.aboutUs,
            stats: domains
        };
    })
}