"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronRight, ArrowLeft, Inbox } from "lucide-react"

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────
type Tag = "VALIDATION" | "CLARITY" | "ROADMAP" | "EXECUTION" | "PRICING" | "ACCESS"

interface Ticket {
    id: number
    tag: Tag
    question: string
    answer: string
    bullets: string[]
    minutesToRead: number
    updatedLabel: string
    relatedIds: number[]
}

// ─────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────
const tickets: Ticket[] = [
    {
        id: 1,
        tag: "VALIDATION",
        question: "Will Krowe tell me if my idea is bad?",
        answer:
            "Krowe evaluates feasibility and explains why your idea is strong or risky so you're not building on vibes.",
        bullets: ["Build / niche down / pivot direction", "What to change to improve odds", "Who the buyer actually is"],
        minutesToRead: 2,
        updatedLabel: "Updated recently",
        relatedIds: [2, 3, 4],
    },
    {
        id: 2,
        tag: "CLARITY",
        question: "What if my idea is still messy?",
        answer: "If your idea is broad, we help you narrow it into a specific customer + problem so it's testable.",
        bullets: ["Sharper positioning", "Cleaner target customer", "Less guesswork"],
        minutesToRead: 2,
        updatedLabel: "Updated recently",
        relatedIds: [1, 3, 6],
    },
    {
        id: 3,
        tag: "ROADMAP",
        question: "How do I know what to do next?",
        answer: "Krowe turns chaos into a step-by-step path so you stop doing random busywork.",
        bullets: ["Next best task surfaced daily", "Right order, fewer dead ends", "Progress you can feel"],
        minutesToRead: 2,
        updatedLabel: "Updated recently",
        relatedIds: [4, 5, 2],
    },
    {
        id: 4,
        tag: "EXECUTION",
        question: "What if I only have a few hours per week?",
        answer: "The plan adapts to your time. You move in small sprints while keeping the sequence correct.",
        bullets: ["Flexible pace", "Still the right order", "Less overwhelm"],
        minutesToRead: 2,
        updatedLabel: "Updated recently",
        relatedIds: [3, 5, 6],
    },
    {
        id: 5,
        tag: "PRICING",
        question: "What am I paying for — AI answers or a system?",
        answer: "Not just chat. You get structure: analysis → decision → next steps → tailored plan.",
        bullets: ["Tailored to your idea", "Clear outcomes, not generic advice", "Momentum through tasks"],
        minutesToRead: 2,
        updatedLabel: "Updated recently",
        relatedIds: [6, 3, 1],
    },
    {
        id: 6,
        tag: "ACCESS",
        question: "Do I need a team or experience?",
        answer: " You don't need one to start, as you build Krowe will guide you to build a strong team.",
        bullets: ["Beginner-friendly guidance", "Actionable, not theoretical", "Designed for solo founders"],
        minutesToRead: 2,
        updatedLabel: "Updated recently",
        relatedIds: [5, 2, 4],
    },
]

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────
export function KroweHelpdeskFAQ() {
    const [selectedId, setSelectedId] = useState<number | null>(null)
    const [mobileView, setMobileView] = useState<"list" | "detail">("list")
    const ticketRefs = useRef<Map<number, HTMLButtonElement>>(new Map())

    const selectedTicket = tickets.find((t) => t.id === selectedId)

    const handleSelectTicket = (id: number) => {
        setSelectedId(id)
        setMobileView("detail")
    }

    const handleRelatedClick = (id: number) => {
        setSelectedId(id)
        // Scroll the ticket into view in left panel
        const el = ticketRefs.current.get(id)
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "nearest" })
        }
    }

    const handleBack = () => {
        setMobileView("list")
    }

    // Reset mobile view when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileView("list")
            }
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="mx-auto max-w-[1150px] px-4 sm:px-6">
                {/* Header */}
                <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl font-serif">
                            FAQ, but built like a helpdesk.
                        </h2>
                        <p className="mt-2 text-base text-neutral-500 md:text-lg font-serif">
                            Open a ticket — get clarity fast.
                        </p>
                    </div>

                </div>

                {/* Helpdesk Panel */}
                <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg shadow-neutral-200/60">
                    {/* Desktop Layout */}
                    <div className="hidden md:grid md:grid-cols-[38%_1fr]">
                        {/* Left Panel - Ticket List */}
                        <div className="relative flex flex-col border-r border-neutral-200">
                            <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-3">
                                <span className="text-xs font-medium uppercase tracking-wide text-neutral-400">Tickets</span>
                                <span className="rounded-full bg-orange-50 px-2 py-0.5 text-xs font-medium text-orange-600">
                                    Showing {tickets.length}
                                </span>
                            </div>
                            <div className="relative max-h-[420px] flex-1 overflow-y-auto">
                                {tickets.map((ticket) => (
                                    <TicketRow
                                        key={ticket.id}
                                        ticket={ticket}
                                        isActive={selectedId === ticket.id}
                                        onClick={() => handleSelectTicket(ticket.id)}
                                        ref={(el) => {
                                            if (el) ticketRefs.current.set(ticket.id, el)
                                        }}
                                    />
                                ))}
                                {/* Fade at bottom */}
                                <div className="pointer-events-none sticky bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent" />
                            </div>
                        </div>

                        {/* Right Panel - Ticket Detail */}
                        <div className="relative min-h-[480px] bg-neutral-50/50">
                            {selectedTicket ? (
                                <TicketDetail ticket={selectedTicket} allTickets={tickets} onRelatedClick={handleRelatedClick} />
                            ) : (
                                <div className="flex h-full flex-col items-center justify-center px-8 py-16 text-center">
                                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-50">
                                        <Inbox className="h-6 w-6 text-orange-400" />
                                    </div>
                                    <p className="text-base font-medium text-neutral-600">Open a ticket to see the answer.</p>
                                    <p className="mt-1 text-sm text-neutral-400">Select from the list on the left.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden">
                        {mobileView === "list" ? (
                            <div className="flex flex-col">
                                <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
                                    <span className="text-xs font-medium uppercase tracking-wide text-neutral-400">Tickets</span>
                                    <span className="rounded-full bg-orange-50 px-2 py-0.5 text-xs font-medium text-orange-600">
                                        Showing {tickets.length}
                                    </span>
                                </div>
                                <div className="max-h-[400px] overflow-y-auto">
                                    {tickets.map((ticket) => (
                                        <TicketRow
                                            key={ticket.id}
                                            ticket={ticket}
                                            isActive={selectedId === ticket.id}
                                            onClick={() => handleSelectTicket(ticket.id)}
                                        />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="motion-safe:animate-in motion-safe:slide-in-from-right motion-safe:duration-200">
                                {/* Mobile Back Button */}
                                <div className="border-b border-neutral-100 px-4 py-3">
                                    <button
                                        onClick={handleBack}
                                        className="flex items-center gap-1.5 text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
                                    >
                                        <ArrowLeft className="h-4 w-4" />
                                        Back to tickets
                                    </button>
                                </div>
                                {selectedTicket && (
                                    <TicketDetail
                                        ticket={selectedTicket}
                                        allTickets={tickets}
                                        onRelatedClick={handleRelatedClick}
                                        isMobile
                                    />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

// ─────────────────────────────────────────────────────────────
// Subcomponents
// ─────────────────────────────────────────────────────────────
import { forwardRef } from "react"

interface TicketRowProps {
    ticket: Ticket
    isActive: boolean
    onClick: () => void
}

const TicketRow = forwardRef<HTMLButtonElement, TicketRowProps>(({ ticket, isActive, onClick }, ref) => {
    return (
        <button
            ref={ref}
            onClick={onClick}
            className={`relative flex w-full cursor-pointer flex-col gap-1.5 border-b border-neutral-100 px-5 py-4 text-left transition-colors hover:bg-orange-50/50 ${isActive ? "bg-orange-50/70" : ""
                }`}
        >
            {/* Active left accent bar */}
            {isActive && <span className="absolute left-0 top-0 h-full w-[3px] bg-orange-500" />}
            <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-medium leading-snug text-neutral-800 font-serif">{ticket.question}</h3>
                <ChevronRight
                    className={`mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-400 transition-transform ${isActive ? "translate-x-0.5 text-orange-500" : ""
                        }`}
                />
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span>
                    {ticket.minutesToRead} min read • {ticket.updatedLabel}
                </span>
            </div>
            <div className="mt-1 flex items-center gap-2">
                <TagChip tag={ticket.tag} />
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            </div>
        </button>
    )
})
TicketRow.displayName = "TicketRow"

interface TicketDetailProps {
    ticket: Ticket
    allTickets: Ticket[]
    onRelatedClick: (id: number) => void
    isMobile?: boolean
}

function TicketDetail({ ticket, allTickets, onRelatedClick, isMobile }: TicketDetailProps) {
    const relatedTickets = ticket.relatedIds.map((id) => allTickets.find((t) => t.id === id)).filter(Boolean) as Ticket[]

    return (
        <div
            key={ticket.id}
            className={`flex flex-col gap-5 p-6 md:p-8 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-3 motion-safe:duration-200 ${isMobile ? "bg-neutral-50/50" : ""
                }`}
        >
            {/* Header row */}
            <div className="flex items-center gap-3">
                <TagChip tag={ticket.tag} />
                <span className="flex items-center gap-1.5 text-xs font-medium text-green-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Opened
                </span>
            </div>

            {/* Question title */}
            <h3 className="text-xl font-semibold leading-snug text-neutral-900 md:text-2xl font-serif">{ticket.question}</h3>

            {/* Answer */}
            <p className="text-base leading-relaxed text-neutral-600">{ticket.answer}</p>

            {/* Bullets */}
            <ul className="flex flex-col gap-2">
                {ticket.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-400" />
                        {bullet}
                    </li>
                ))}
            </ul>

            {/* Related questions */}
            <div className="mt-4 border-t border-neutral-200 pt-5">
                <p className="mb-3 text-xs font-medium uppercase tracking-wide text-neutral-400">Related questions</p>
                <div className="flex flex-wrap gap-2">
                    {relatedTickets.map((related) => (
                        <button
                            key={related.id}
                            onClick={() => onRelatedClick(related.id)}
                            className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-left text-sm text-neutral-700 transition-colors hover:border-orange-300 hover:bg-orange-50"
                        >
                            {related.question}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

function TagChip({ tag }: { tag: Tag }) {
    return (
        <span className="rounded bg-orange-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-orange-600">
            {tag}
        </span>
    )
}

export default KroweHelpdeskFAQ
