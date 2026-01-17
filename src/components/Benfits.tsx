"use client"

import { useState, useEffect, useCallback } from "react"
import { cn } from "../lib/utils"
import { motion } from "framer-motion"

// Typing animation hook
function useTypingEffect(text: string, speed = 30, trigger = true) {
    const [displayedText, setDisplayedText] = useState("")
    const [isTyping, setIsTyping] = useState(false)

    useEffect(() => {
        if (!trigger) {
            setDisplayedText("")
            return
        }

        setIsTyping(true)
        setDisplayedText("")
        let i = 0

        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(text.slice(0, i + 1))
                i++
            } else {
                setIsTyping(false)
                clearInterval(interval)
            }
        }, speed)

        return () => clearInterval(interval)
    }, [text, speed, trigger])

    return { displayedText, isTyping }
}

// Tab content data
const directionOptions = {
    build: {
        label: "Build",
        badge: "Ready to Build",
        badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
        explanation: "Your problem + buyer are clear. MVP is realistic for your resources.",
        reasons: [
            "Clear problem-solution fit identified",
            "Target buyer is specific and reachable",
            "Scope matches available resources",
        ],
    },
    niche: {
        label: "Niche Down",
        badge: "Needs Focus",
        badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
        explanation: "Strong direction, but the buyer is too broad. Narrow = faster traction.",
        reasons: [
            "Problem resonates but audience is scattered",
            "Too many competing priorities",
            "Narrowing will accelerate validation",
        ],
    },
    pivot: {
        label: "Pivot",
        badge: "Shift Angle",
        badgeColor: "bg-rose-500/10 text-rose-600 border-rose-500/20",
        explanation: "The approach is costly or crowded. We'll shift the angle without restarting.",
        reasons: [
            "Current path has high execution risk",
            "Market is saturated at this angle",
            "Adjacent opportunity is more viable",
        ],
    },
}

const tabs = ["Direction", "Next Move", "Tailored Plan"] as const
type TabType = (typeof tabs)[number]

const analysisChips = ["Problem clarity", "Buyer specificity", "MVP realism"]

const blueprintNodes = [
    {
        id: "problem",
        label: "Problem Research",
        relevantTo: ["Product", "Stage"],
        colors: { bg: "bg-blue-500/5", border: "border-blue-500/10", dot: "bg-blue-400" },
    },
    {
        id: "audience",
        label: "Audience Research",
        relevantTo: ["Customer", "Market"],
        colors: { bg: "bg-purple-500/5", border: "border-purple-500/10", dot: "bg-purple-400" },
    },
    {
        id: "competitor",
        label: "Competitor Research",
        relevantTo: ["Market", "Product"],
        colors: { bg: "bg-orange-500/5", border: "border-orange-500/10", dot: "bg-orange-400" },
    },
    {
        id: "mvp",
        label: "MVP Build",
        relevantTo: ["Product", "Stage"],
        colors: { bg: "bg-emerald-500/5", border: "border-emerald-500/10", dot: "bg-emerald-400" },
    },
    {
        id: "validation",
        label: "Validation",
        relevantTo: ["Stage", "Customer"],
        colors: { bg: "bg-rose-500/5", border: "border-rose-500/10", dot: "bg-rose-400" },
    },
    {
        id: "launch",
        label: "Launch Prep",
        relevantTo: ["Market", "Customer"],
        colors: { bg: "bg-amber-500/5", border: "border-amber-500/10", dot: "bg-amber-400" },
    },
]

const inputChips = [
    { label: "Product", value: "Web app" },
    { label: "Stage", value: "Validation" },
    { label: "Market", value: "B2C" },
    { label: "Customer", value: "Students" },
]

export default function DecisionConsoleBenefits() {
    const [activeTab, setActiveTab] = useState<TabType>("Direction")
    const [directionChoice, setDirectionChoice] = useState<"build" | "niche" | "pivot">("build")
    const [isTransitioning, setIsTransitioning] = useState(false)

    const currentDirection = directionOptions[directionChoice]
    const { displayedText, isTyping } = useTypingEffect(currentDirection.explanation, 25, true)

    const handleTabChange = useCallback(
        (tab: TabType) => {
            if (tab === activeTab) return
            setIsTransitioning(true)
            setTimeout(() => {
                setActiveTab(tab)
                setIsTransitioning(false)
            }, 150)
        },
        [activeTab],
    )

    const handleDirectionChange = useCallback((choice: "build" | "niche" | "pivot") => {
        setDirectionChoice(choice)
    }, [])

    return (
        <section id="benefits" className="w-full py-24 md:py-32 bg-background">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block text-xs font-extrabold tracking-[0.3em] uppercase text-primary mb-4">
                        Benefits
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold tracking-tight text-foreground mb-4">
                        Stop guessing. Get a clear direction.
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Get a clear build / niche down / pivot decision — plus what to do next.
                    </p>
                </div>

                {/* Console Card */}
                <div className="bg-card border border-border rounded-3xl shadow-lg shadow-black/5 overflow-hidden">
                    {/* Console Header */}
                    <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-gray-100">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-rose-400/80" />
                            <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                            <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                        </div>
                        <span className="text-sm font-medium text-foreground font-serif">Krowe Console</span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Live Output
                        </span>
                    </div>

                    {/* Tabs */}
                    <div className="border-b border-border">
                        <div className="flex justify-center">
                            <div className="inline-flex" role="tablist" aria-label="Console sections">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        role="tab"
                                        aria-selected={activeTab === tab}
                                        aria-controls={`panel-${tab}`}
                                        onClick={() => handleTabChange(tab)}
                                        className={cn(
                                            "relative px-6 py-3.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 font-serif",
                                            activeTab === tab ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                                        )}
                                    >
                                        {tab}
                                        {activeTab === tab && (
                                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black transition-all" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div
                        className={cn(
                            "p-6 md:p-8 min-h-[400px] transition-all duration-150",
                            isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0",
                        )}
                    >
                        {/* Direction Tab */}
                        {activeTab === "Direction" && (
                            <div id="panel-Direction" role="tabpanel" aria-labelledby="tab-Direction">
                                {/* Segmented Control */}
                                <div className="flex justify-center mb-8">
                                    <div className="inline-flex p-1 bg-gray-100 rounded-lg" role="radiogroup" aria-label="Direction choice">
                                        {(["build", "niche", "pivot"] as const).map((option) => (
                                            <button
                                                key={option}
                                                role="radio"
                                                aria-checked={directionChoice === option}
                                                onClick={() => handleDirectionChange(option)}
                                                className={cn(
                                                    "relative px-5 py-2 text-sm font-serif font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                                    directionChoice === option
                                                        ? "text-black"
                                                        : "text-muted-foreground hover:text-foreground",
                                                )}
                                            >
                                                <span className="relative z-10 font-serif">{directionOptions[option].label}</span>
                                                {directionChoice === option && (
                                                    <motion.span
                                                        layoutId="active-pill"
                                                        className="absolute inset-0 bg-white rounded-md shadow-sm"
                                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                    />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Decision Badge */}
                                <div className="flex justify-center mb-6">
                                    <span
                                        className={cn(
                                            "inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full border transition-all",
                                            currentDirection.badgeColor,
                                        )}
                                    >
                                        {currentDirection.badge}
                                    </span>
                                </div>

                                {/* Explanation with typing effect */}
                                <div className="text-center mb-8">
                                    <p className="text-base md:text-lg text-black font-medium min-h-[28px]">
                                        {displayedText}
                                        {isTyping && <span className="inline-block w-0.5 h-5 bg-black ml-0.5 animate-pulse" />}
                                    </p>
                                </div>

                                {/* Two Column Layout */}
                                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                                    {/* Left Column */}
                                    <div>
                                        <h4 className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-4 font-serif">
                                            What we analyzed
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {analysisChips.map((chip) => (
                                                <span
                                                    key={chip}
                                                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium bg-gray-100 text-black-900 rounded-full font-serif"
                                                >
                                                    {chip}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right Column */}
                                    <div>
                                        <h4 className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-4 text-gray-500 font-serif">
                                            Why this decision
                                        </h4>
                                        <ul className="space-y-2.5 list-disc pl-5">
                                            {currentDirection.reasons.map((reason, i) => (
                                                <li key={i} className="text-sm text-gray-500 font-medium font-serif">
                                                    {reason}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Next Move Tab */}
                        {activeTab === "Next Move" && (
                            <div id="panel-Next Move" role="tabpanel" aria-labelledby="tab-Next Move">
                                <div className="grid md:grid-cols-3 gap-6">
                                    {/* Task Feed */}
                                    <div className="md:col-span-2 space-y-4">
                                        {/* Header */}
                                        <div className="flex items-center gap-3 mb-2">
                                            <h4 className="text-sm font-semibold text-foreground font-serif">Today</h4>
                                            <span className="text-xs font-medium text-gray-700 bg-gray-200 px-2 py-0.5 rounded-md">
                                                Jan 16
                                            </span>
                                            <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded ml-auto">
                                                Est. 45 min
                                            </span>
                                        </div>

                                        {/* Primary Task */}
                                        <div className="p-4 bg-gray-100 border border-border rounded-xl">
                                            <div className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded border-2 border-gray-600 mt-0.5 shrink-0" />
                                                <div>
                                                    <p className="text-base font-bold text-foreground font-serif">Define your first 10 user interviews</p>
                                                    <p className="text-sm text-black mt-1 font-serif">Critical for validating your assumptions</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Up Next */}
                                        <div className="space-y-2">
                                            <p className="text-xs font-semibold tracking-wide uppercase text-muted-foreground font-serif">Up next</p>
                                            <div className="p-3 border border-border/60 rounded-lg flex items-center gap-3">
                                                <div className="w-4 h-4 rounded border border-border shrink-0" />
                                                <p className="text-sm text-gray-500 font-serif">Write your 1-sentence positioning</p>
                                            </div>
                                            <div className="p-3 border border-border/60 rounded-lg flex items-center gap-3">
                                                <div className="w-4 h-4 rounded border border-border shrink-0" />
                                                <p className="text-sm text-gray-500 font-serif">List 5 direct competitors + pricing</p>
                                            </div>
                                        </div>

                                        {/* Micro copy */}
                                        <p className="text-xs text-muted-foreground pt-2 border-t border-border/50 text-gray-500 font-serif">
                                            Open Krowe and instantly see the next task that actually matters.
                                        </p>
                                    </div>

                                    {/* Why This Matters Panel */}
                                    <div className="p-4 bg-gray-50 border border-border rounded-xl h-fit">
                                        <h4 className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-3 text-gray-500 font-serif">
                                            Why this matters
                                        </h4>
                                        <p className="text-sm text-gray-600 leading-relaxed font-serif">
                                            User interviews are the fastest way to validate (or invalidate) your core assumptions. Skip this
                                            and you're building blind.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Tailored Plan Tab */}
                        {activeTab === "Tailored Plan" && (
                            <div id="panel-Tailored Plan" role="tabpanel" aria-labelledby="tab-Tailored Plan">
                                {/* Input Chips */}
                                <div className="mb-8">
                                    <h4 className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-4 text-center font-serif">
                                        Your Inputs
                                    </h4>
                                    <div className="flex flex-wrap justify-center gap-3">
                                        {inputChips.map((chip) => (
                                            <div
                                                key={chip.label}
                                                className={cn(
                                                    "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border transition-all cursor-default font-serif",
                                                    "bg-muted border-border text-foreground",
                                                )}
                                            >
                                                <span className="text-muted-foreground text-xs">{chip.label}:</span>
                                                {chip.value}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Blueprint Grid */}
                                <div className="mb-8">
                                    <h4 className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-4 text-center font-serif">
                                        Your Blueprint
                                    </h4>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 font-serif">
                                        {blueprintNodes.map((node) => {
                                            return (
                                                <div
                                                    key={node.id}
                                                    className={cn(
                                                        "p-4 rounded-xl border text-center transition-all duration-200 cursor-default group",
                                                        node.colors.bg,
                                                        node.colors.border,
                                                        "hover:bg-opacity-80"
                                                    )}
                                                >
                                                    <div
                                                        className={cn(
                                                            "w-3 h-3 rounded-full mx-auto mb-2 transition-all",
                                                            node.colors.dot,
                                                            "group-hover:brightness-90"
                                                        )}
                                                    />
                                                    <p
                                                        className={cn(
                                                            "text-sm font-medium transition-colors",
                                                            "text-muted-foreground",
                                                        )}
                                                    >
                                                        {node.label}
                                                    </p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                {/* Micro outcome */}
                                <p className="text-center text-sm text-black">
                                    No more forcing your startup into a template that wasn't made for you.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="px-6 md:px-8 py-5 border-t border-border bg-muted/20">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <button className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 font-serif"
                                type="button"
                                onClick={() => (window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScDZyg4ZXbwFoyQ62WcXL6RonKNlVsjdCbesFV4BkjcIUMWSQ/viewform?usp=header")}
                                >
                                    Get my direction
                                </button>
                                <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded font-serif">
                                    See a sample report
                                </button>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground text-center sm:text-left mt-3">
                            Takes ~3 minutes. No fluff — just decisions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
