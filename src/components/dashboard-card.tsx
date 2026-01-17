"use client"

import { cn } from "../lib/utils"
import { CheckCircle2, Flame, Target, BarChart3, Users, Calendar, Trophy } from "lucide-react"

type CardType = "streak" | "tasks" | "progress" | "section" | "feasibility" | "milestone" | "competitor"

interface DashboardCardProps {
    type: CardType
    className?: string
    showLabel?: boolean
    label?: string
}

interface CardContentData {
    icon: typeof Flame
    title: string
    subtitle?: string
    accent?: string
    bg?: string
    defaultLabel: string
    items?: string[]
    progress?: number
    detail?: string
    score?: string
    count?: string
}

export function DashboardCard({ type, className, showLabel = false, label }: DashboardCardProps) {
    const cardContent: Record<CardType, CardContentData> = {
        streak: {
            icon: Flame,
            title: "7 Day Streak",
            subtitle: "You're on fire!",
            accent: "text-primary",
            bg: "bg-primary/10",
            defaultLabel: "Streak",
        },
        tasks: {
            icon: CheckCircle2,
            title: "Today's Focus",
            items: ["Research competitors", "Define MVP scope", "Draft landing copy"],
            defaultLabel: "Top Tasks",
        },
        progress: {
            icon: BarChart3,
            title: "Week 2 Progress",
            progress: 65,
            defaultLabel: "Progress",
        },
        section: {
            icon: Target,
            title: "Current Phase",
            subtitle: "Validation",
            detail: "3 of 5 tasks complete",
            defaultLabel: "Current Section",
        },
        feasibility: {
            icon: Trophy,
            title: "Feasibility Score",
            score: "8.2",
            detail: "High potential",
            defaultLabel: "Feasibility",
        },
        milestone: {
            icon: Calendar,
            title: "Next Milestone",
            subtitle: "MVP Launch",
            detail: "In 3 weeks",
            defaultLabel: "Milestone",
        },
        competitor: {
            icon: Users,
            title: "Competitors Found",
            count: "4",
            detail: "2 direct, 2 indirect",
            defaultLabel: "Competitors",
        },
    }

    const content = cardContent[type]
    const Icon = content.icon

    return (
        <div className="flex flex-col gap-1.5">
            {showLabel && (
                <span className="text-xs uppercase tracking-wider text-muted-foreground pl-1">
                    {label || content.defaultLabel}
                </span>
            )}
            <div
                className={cn(
                    "w-56 bg-card border border-border rounded-xl p-4 shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-300",
                    className,
                )}
            >
                {type === "streak" && (
                    <div className="flex items-center gap-3">
                        <div className={cn("p-2 rounded-lg", content.bg)}>
                            <Icon className={cn("w-5 h-5", content.accent)} />
                        </div>
                        <div>
                            <p className="font-semibold text-card-foreground">{content.title}</p>
                            <p className="text-sm text-muted-foreground">{content.subtitle}</p>
                        </div>
                    </div>
                )}

                {type === "tasks" && (
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className="font-semibold text-card-foreground text-sm">{content.title}</p>
                        </div>
                        <ul className="space-y-2">
                            {content.items?.map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {type === "progress" && (
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <Icon className="w-4 h-4 text-primary" />
                                <p className="font-semibold text-card-foreground text-sm">{content.title}</p>
                            </div>
                            <span className="text-sm font-medium text-primary">{content.progress}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <div
                                className="h-full bg-primary rounded-full transition-all duration-500"
                                style={{ width: `${content.progress}%` }}
                            />
                        </div>
                    </div>
                )}

                {type === "section" && (
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className="font-semibold text-card-foreground text-sm">{content.title}</p>
                        </div>
                        <p className="text-lg font-semibold text-foreground">{content.subtitle}</p>
                        <p className="text-sm text-muted-foreground">{content.detail}</p>
                    </div>
                )}

                {type === "feasibility" && (
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className="font-semibold text-card-foreground text-sm">{content.title}</p>
                        </div>
                        <p className="text-3xl font-bold text-primary">{content.score}</p>
                        <p className="text-sm text-muted-foreground">{content.detail}</p>
                    </div>
                )}

                {type === "milestone" && (
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className="font-semibold text-card-foreground text-sm">{content.title}</p>
                        </div>
                        <p className="text-lg font-semibold text-foreground">{content.subtitle}</p>
                        <p className="text-sm text-muted-foreground">{content.detail}</p>
                    </div>
                )}

                {type === "competitor" && (
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className="font-semibold text-card-foreground text-sm">{content.title}</p>
                        </div>
                        <p className="text-3xl font-bold text-foreground">{content.count}</p>
                        <p className="text-sm text-muted-foreground">{content.detail}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
