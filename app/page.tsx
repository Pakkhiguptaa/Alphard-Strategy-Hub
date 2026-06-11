"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Layers3,
  Linkedin,
  Menu,
  Network,
} from "lucide-react";
import { cn } from "@/lib/utils";

type CommitteeRole = "Buyer" | "Champion / User" | "Influencer";

type Person = {
  name: string;
  role: string;
  linkedin: string;
  committeeRole: CommitteeRole;
  why: string;
  image?: string;
};

type MatrixRow = {
  person: string;
  committeeRole: string;
  businessPain: string;
  fear: string;
  alphardRelevance: string;
  suggestedEntryPoint: string;
};

type MessageExample = {
  label: string;
  text: string;
};

type CommittedPlay = {
  eyebrow: string;
  title: string;
  body: string;
  sequence?: string;
  messages?: MessageExample[];
  inPerson?: string;
};

type Company = {
  id: string;
  name: string;
  headline: string;
  whatTheyDo: string;
  whyAlphardCares: string;
  whyNow?: string[];
  connectorRoutes?: string[];
  strategicAdvantage?: {
    title: string;
    body: string;
    whyItMatters: string;
    attackAngle: string;
  };
  personas: string[];
  people: Person[];
  matrix: MatrixRow[];
  messagingEntryPoint: string;
  firstMove: string;
  committedPlay: CommittedPlay;
};

const companies: Company[] = [
  {
    id: "datasnipper",
    name: "DataSnipper",
    headline: "Audit automation, post-sales expansion opportunity",
    whatTheyDo:
      "DataSnipper is an audit automation platform that helps audit and finance teams extract, verify, cross-reference, and document audit evidence directly inside Excel and connected workflows.",
    whyAlphardCares:
      "DataSnipper is a scaled B2B SaaS company with enterprise audit and finance customers. As the customer base grows, strategic customer success and account management teams likely need better ways to identify expansion opportunities, standardise account planning, and surface whitespace across accounts.",
    whyNow: [
      "Raised a $100M Series B led by Index Ventures at a $1B valuation after doubling revenue and customer base in a year. A customer base growing faster than the post-sales team can manually cover is exactly the gap Alphard fills.",
      "Publicly expanding from external audit into internal audit, tax, and forensic accounting, plus APAC and LatAm. Every new vertical multiplies whitespace inside existing accounts that nobody is systematically tracking.",
    ],
    connectorRoutes: [
      "Insight Partners invested in DataSnipper in 2022 and is also Xelix's Series B lead. One investor network covers two of the three target accounts. Insight runs GTM and CS peer communities for its portfolio; any contact inside that network is a warm route into both companies.",
      "Index Ventures led the Series B. Index's London platform team and portfolio events are a second-degree route to DataSnipper leadership.",
    ],
    personas: [
      "Strategic Customer Success Manager",
      "VP Customer Success",
      "Chief Revenue Officer",
      "Customer Success Leader",
      "Revenue Operations / CS Operations",
    ],
    people: [
      {
        name: "Jamie Ryan",
        role: "Vice President, Customer Success",
        linkedin: "https://www.linkedin.com/in/jamierobertsonryan/",
        committeeRole: "Buyer",
        why: "Owns customer success, retention, expansion, and CS team effectiveness globally.",
        image: "/people/jamie-ryan.jpg",
      },
      {
        name: "Carrie Bosworth",
        role: "CRO",
        linkedin: "https://www.linkedin.com/in/carriebosworth/",
        committeeRole: "Buyer",
        why: "Revenue leader tied to customer growth, expansion, and commercial outcomes.",
        image: "/people/carrie-bosworth.jpg",
      },
      {
        name: "Channalyn Tek",
        role: "Principal CSM",
        linkedin: "https://www.linkedin.com/in/channalyntek/",
        committeeRole: "Champion / User",
        why: "Closest to account planning, renewals, customer health, and expansion conversations.",
        image: "/people/channalyn-tek.jpg",
      },
      {
        name: "Dirk Van Portfliet",
        role: "Customer Success Leader",
        linkedin: "https://www.linkedin.com/in/dirkvanportfliet/",
        committeeRole: "Influencer",
        why: "Directly responsible for CS operations and scaling customer success processes. Frequently appears alongside Jamie Ryan in DataSnipper leadership and events.",
        image: "/people/dirk-van-portfliet.jpg",
      },
      {
        name: "Taylor Holmes",
        role: "Senior Strategic Customer Success Manager",
        linkedin: "https://www.linkedin.com/in/tayloranneholmes/",
        committeeRole: "Influencer",
        why: "Directly involved in strategic accounts, renewals, customer health, and expansion conversations.",
        image: "/people/taylor-holmes.jpg",
      },
      {
        name: "Lauren Scott",
        role: "Strategic Customer Success Manager",
        linkedin: "https://www.linkedin.com/in/lauren-m-scott/",
        committeeRole: "Influencer",
        why: "Directly involved in strategic accounts, renewals, customer health, and expansion conversations.",
        image: "/people/lauren-scott.jpg",
      },
    ],
    matrix: [
      {
        person: "Jamie Ryan",
        committeeRole: "Economic Buyer",
        businessPain:
          "Needs scalable CS execution, stronger expansion visibility, and better account growth discipline",
        fear:
          "Expansion targets rise after a $1B valuation round, but visibility into account growth is still anecdotal. The fear is reporting reactive, lagging expansion numbers to a board that just paid for growth.",
        alphardRelevance:
          "Alphard can help standardise expansion intelligence and account planning",
        suggestedEntryPoint:
          "Approach after champion discovery with a hypothesis-led note",
      },
      {
        person: "Carrie Bosworth",
        committeeRole: "Economic Buyer",
        businessPain:
          "Needs revenue growth, expansion discipline, and stronger visibility into customer growth opportunities",
        fear:
          "Core external-audit market saturates while new verticals open. The fear is missing cross-sell into internal audit and tax inside accounts the company already owns.",
        alphardRelevance:
          "Alphard can connect customer success signals to expansion-ready account intelligence",
        suggestedEntryPoint:
          "Approach after champion and influencer discovery with a commercial growth hypothesis",
      },
      {
        person: "Channalyn Tek",
        committeeRole: "Champion / User",
        businessPain:
          "Needs faster ways to prepare account reviews, identify whitespace, and understand account context",
        fear:
          "The book grows faster than prep time. The fear is being judged on renewals and churn she had no way to see coming.",
        alphardRelevance:
          "Alphard can reduce manual prep and surface expansion signals",
        suggestedEntryPoint:
          "Start with relationship-building and discovery, not a sales pitch",
      },
      {
        person: "Dirk Van Portfliet",
        committeeRole: "Influencer",
        businessPain:
          "Needs consistency across CS operations, team workflows, and scalable customer success processes",
        fear:
          "CS process breaking down as headcount scales, with every CSM running accounts their own way.",
        alphardRelevance:
          "Alphard can become a process layer for account planning and expansion workflows",
        suggestedEntryPoint:
          "Use as one influencer route after champion validation. If one influencer does not respond, move to Taylor Holmes or Lauren Scott",
      },
      {
        person: "Taylor Holmes",
        committeeRole: "Influencer",
        businessPain:
          "Needs efficient ways to manage strategic accounts, renewals, customer health, and expansion conversations",
        fear:
          "Strategic accounts getting reactive service because account context lives in scattered notes.",
        alphardRelevance:
          "Alphard can reduce manual account preparation and surface expansion signals for strategic accounts",
        suggestedEntryPoint:
          "Use as a second strategic-account influencer route if Dirk Van Portfliet does not respond",
      },
      {
        person: "Lauren Scott",
        committeeRole: "Influencer",
        businessPain:
          "Needs clearer account context before renewals, health reviews, and expansion conversations",
        fear:
          "Walking into renewal conversations with less context than the customer has.",
        alphardRelevance:
          "Alphard can help strategic CSMs prioritise account actions and prepare customer conversations faster",
        suggestedEntryPoint:
          "Use as another influencer route if Taylor Holmes or Dirk Van Portfliet does not respond",
      },
    ],
    messagingEntryPoint:
      "Start with the champion. Ask how strategic account reviews are prepared, how expansion opportunities are found, and what customer signals are hard to track today. Do not claim the team has a problem. Convert discovery into a leadership hypothesis: As DataSnipper scales, expansion identification may still depend on CRM hygiene, manual account reviews, and individual CSM knowledge. Is that accurate?",
    firstMove:
      "Connect with Channalyn Tek first. Build credibility through a short, practical message about strategic account planning in fast-scaling SaaS companies. Ask for 15 minutes to understand how CS teams prepare for renewal and expansion conversations. Use that insight to craft a sharper, non-generic outreach to Jamie Ryan.",
    committedPlay: {
      eyebrow: "The Play",
      title: "Messaging attack",
      body: "This account runs on cold outreach. The pain is visible, the champion path is clear, and there is no confirmed DataSnipper-hosted London motion worth waiting for. The events attack is dropped as a primary path: DigiGov Expo is a public sector audience and wrong for this account. Big Data LDN stays as an opportunistic add-on only if outreach has already opened a thread.",
      sequence:
        "Channalyn first, Dirk as the parallel influencer, escalate to Jamie Ryan only after one of them confirms how account prep is actually done today.",
      messages: [
        {
          label: "Message to Channalyn",
          text: "Hi Channalyn, since the Series B, DataSnipper has been pushing into internal audit and tax, which usually means CS teams suddenly own whitespace nobody mapped. Curious how your team spots expansion signals across accounts today: structured process or CSM judgment? Happy to swap notes either way.",
        },
      ],
    },
  },
  {
    id: "xelix",
    name: "Xelix",
    headline:
      "AP controls and finance operations, post-sales expansion opportunity",
    whatTheyDo:
      "Xelix is an AI-powered accounts payable control and finance operations platform. It helps finance teams detect duplicate payments, prevent overpayments, identify supplier risks, improve reconciliations, and strengthen AP controls.",
    whyAlphardCares:
      "Xelix is a B2B SaaS company selling to enterprise finance teams. Its post-sales team likely manages complex customer accounts, renewals, upsells, and value realisation. Alphard could help its account and customer success teams identify expansion signals, prioritise accounts, and make account planning more systematic.",
    whyNow: [
      "Closed a $160M Series B led by Insight Partners in July 2025. Insight installs revenue discipline in its portfolio; NRR and expansion reporting will get board scrutiny within two quarters of a round this size.",
      "Xelix's own funding announcement credits its growth to client support and value realisation. Post-sales is publicly named as the growth engine, which means the team carrying it needs leverage.",
      "Serves 130+ enterprise clients including AstraZeneca, BAT, GSK, and Virgin Atlantic. Enterprise accounts of that size are exactly where expansion signals hide in QBR notes and email threads.",
    ],
    connectorRoutes: [
      "Insight Partners again, the same investor as DataSnipper. Ryan Hinkle and Alessandro Luciano of Insight joined the Xelix board with the round. One warm contact in Insight's portfolio network opens both accounts.",
      "Passion Capital and LocalGlobe are returning investors. LocalGlobe's Phoenix Court community runs regular London operator events, a realistic in-person route to Xelix's post-sales leadership.",
    ],
    personas: [
      "Account Manager",
      "Senior Account Manager",
      "Customer Success Manager",
      "Head of Account Management",
      "VP Sales",
      "Revenue Operations / Commercial Operations",
    ],
    people: [
      {
        name: "Paris Haig",
        role: "Head of Customer Success / Account Management",
        linkedin: "https://www.linkedin.com/in/paris-haig-n%C3%A9e-baker-ab5873a6/",
        committeeRole: "Buyer",
        why: "Owns post-sales revenue, renewals, account growth, and customer success effectiveness.",
        image: "/people/paris-haig.jpg",
      },
      {
        name: "Hannah Lansdell",
        role: "Senior Account Manager",
        linkedin: "https://www.linkedin.com/in/hannah-lansdell-3129a9187/",
        committeeRole: "Champion / User",
        why: "Directly customer-facing. Regularly works with customer accounts, gathers feedback, and supports account growth initiatives.",
        image: "/people/hannah-lansdell.jpg",
      },
      {
        name: "Sam Dhingra",
        role: "VP Sales",
        linkedin: "https://www.linkedin.com/in/sam-dhingra/",
        committeeRole: "Influencer",
        why: "Sales leadership would influence commercial growth priorities, expansion strategy, and account intelligence needs.",
        image: "/people/sam-dhingra.jpg",
      },
      {
        name: "Sarah Drake",
        role: "Account Management Team Leader",
        linkedin: "https://www.linkedin.com/in/sarah-drake/",
        committeeRole: "Influencer",
        why: "Leads account management workflows and would influence adoption of account intelligence tools.",
        image: "/people/sarah-drake.jpg",
      },
    ],
    matrix: [
      {
        person: "Paris Haig",
        committeeRole: "Economic Buyer",
        businessPain:
          "Needs scalable account management, renewal discipline, upsell visibility, and value realisation",
        fear:
          "Post-raise growth targets arrive before the systems to hit them. The fear is renewals and upsells managed in spreadsheets failing in front of a new board.",
        alphardRelevance:
          "Alphard can help account teams identify growth opportunities and prioritise accounts",
        suggestedEntryPoint:
          "Approach after validating frontline workflow pain",
      },
      {
        person: "Hannah Lansdell",
        committeeRole: "Champion / User",
        businessPain:
          "Needs practical visibility into customer accounts, feedback, account health, and expansion timing",
        fear:
          "Account knowledge lives in her head and her notes. The fear is being unable to scale herself as the client list grows.",
        alphardRelevance:
          "Alphard can reduce manual account research and help surface customer growth signals from customer-facing work",
        suggestedEntryPoint:
          "First relationship to build through discovery around customer feedback loops, account planning, and expansion readiness",
      },
      {
        person: "Sam Dhingra",
        committeeRole: "Influencer",
        businessPain:
          "Increase expansion revenue by improving account prioritisation and surfacing growth opportunities across the customer base.",
        fear:
          "Publicly champions AI transformation. The fear is the AI agenda staying theoretical, with no shipped internal win to point to.",
        alphardRelevance:
          "Sam actively talks about AI adoption for strategy and AI transformation within the company. Alphard can align with that agenda by giving sales and post-sales teams better account intelligence, clearer expansion signals, and a practical AI layer for account prioritisation.",
        suggestedEntryPoint:
          "Use as one influencer route after champion validation. If one influencer does not respond, move to Sarah Drake",
      },
      {
        person: "Sarah Drake",
        committeeRole: "Influencer",
        businessPain:
          "Needs account management workflows that support adoption, prioritisation, and expansion conversations",
        fear:
          "Every account manager preparing for renewals differently, with quality depending on who owns the account.",
        alphardRelevance:
          "Alphard can help account managers prioritise accounts and prepare more consistently",
        suggestedEntryPoint:
          "Use as a second influencer route if Sam Dhingra does not respond",
      },
    ],
    messagingEntryPoint:
      "Start with Hannah Lansdell. Ask how customer accounts are prepared, how feedback is captured, which signals matter before a renewal, and how customer feedback is turned into growth opportunities. Then approach Paris with a hypothesis: As Xelix scales its enterprise customer base, account growth may still rely on scattered customer notes, CRM discipline, and individual account manager judgment. Alphard could help standardise that intelligence.",
    firstMove:
      "Connect with Hannah Lansdell first. Use a short discovery-led message around customer feedback loops, account planning, and customer expansion in finance SaaS. After validating the workflow, approach Paris Haig with a concise business case around expansion visibility, renewal preparation, and account team productivity.",
    committedPlay: {
      eyebrow: "The Play",
      title: "Messaging attack, funding-timed",
      body: "Run cold messaging as the only path. Xelix is a focussed, smaller post-sales org with no major event motion of its own, and the Series B gives the outreach a timestamp. Events are dropped entirely for this account.",
      sequence:
        "Hannah for workflow discovery, Sam in parallel on the AI angle, Paris only after pain is confirmed.",
      messages: [
        {
          label: "Message to Hannah",
          text: "Hi Hannah, Xelix's Series B announcement credited growth to client support and value realisation, which is rare to see named so directly. With 130+ enterprise accounts, I am curious whether expansion signals get surfaced systematically or whether it still runs on account-manager memory. Would value 15 minutes on how that works today.",
        },
        {
          label: "Message to Sam",
          text: "Hi Sam, your posts on AI transformation at Xelix stood out because most companies talk adoption without naming workflows. One workflow I keep seeing: turning scattered account context into expansion signals for post-sales teams. Is that on your internal AI roadmap, or is the focus elsewhere right now?",
        },
      ],
    },
  },
  {
    id: "paddle",
    name: "Paddle",
    headline:
      "Merchant-of-record platform, London-based expansion intelligence opportunity",
    whatTheyDo:
      "Paddle is a London-headquartered merchant-of-record platform serving 10,000+ software companies. Its customer success and revenue teams manage a large customer base where expansion signals, churn risk, and account growth opportunities need to be surfaced systematically.",
    whyAlphardCares:
      "Paddle fits Alphard's ICP with roughly 300 employees, a London base, and a large B2B SaaS customer portfolio. Alphard can help Paddle's customer success and revenue teams uncover expansion signals, prevent churn, and make account planning less dependent on manual notes and individual judgment.",
    whyNow: [
      "Acquired ProfitWell, a retention and pricing analytics company. Leadership has already spent real money on the belief that retention and expansion should be data-driven. Alphard is the operational layer for the same belief.",
      "Raised a $200M Series D led by KKR at a $1.4B valuation. Growth investors at that stage manage to NRR. A 10,000+ customer base means expansion has to be systematic or it does not happen.",
      "Runs B2Coast, an invite-only community event. A company that invests in community is relationship-led, which confirms the event path.",
    ],
    connectorRoutes: [
      "The ProfitWell ecosystem. ProfitWell's content and community audience is full of SaaS retention and pricing operators. Engaging there builds visible context before any direct message.",
      "Paddle's investor bench: KKR, FTV Capital, Notion Capital, 83North, Kindred. Notion Capital in particular runs London SaaS operator events where Paddle's revenue leadership shows up. A second route alongside B2Coast.",
    ],
    strategicAdvantage: {
      title: "Two Strategic Advantages of Choosing Paddle",
      body: "Paddle is useful in two ways: first as a direct target account for Alphard, and second as a gateway into a broader SaaS founder, revenue, customer success, and AI transformation ecosystem.",
      whyItMatters:
        "Use Paddle's own community motion, especially B2Coast, as a warm-entry path into the account. B2Coast is a private invite-only event powered by Paddle, which creates a natural setting to meet customer success and revenue leaders without starting with a cold pitch.",
      attackAngle:
        "Use Paddle's ecosystem to meet other Alphard ICPs. The same events and community programmes attract SaaS operators with similar post-sales growth, churn, NRR, and account expansion challenges.",
    },
    personas: [
      "Chief Revenue Officer",
      "Head of Customer Success",
      "Chief Innovation Officer",
      "AI Enablement Lead",
      "Senior Customer Success Manager",
    ],
    people: [
      {
        name: "Rich Mason",
        role: "Chief Revenue Officer (International)",
        linkedin: "https://www.linkedin.com/in/rich-mason-59875b14/",
        committeeRole: "Buyer",
        image: "/people/rich-mason.jpg",
        why: "Post-sales and commercial budget owner. Relevant for quantifying revenue impact, expansion intelligence, and NRR improvement.",
      },
      {
        name: "Kirsty Jarvis",
        role: "Head of Customer Success, EMEA & APAC",
        linkedin: "https://www.linkedin.com/in/kirsty-jarvis-86345035/",
        committeeRole: "Champion / User",
        image: "/people/kirsty-jarvis.jpg",
        why: "Oversees day-to-day customer success workflows and would feel the pain of manual account reviews, renewal prep, and expansion signal tracking.",
      },
      {
        name: "Andrew Davies",
        role: "Chief Innovation Officer",
        linkedin: "https://www.linkedin.com/in/andjdavies/",
        committeeRole: "Influencer",
        image: "/people/andrew-davies.jpg",
        why: "Innovation leader who can sponsor experimental tools and connect Alphard to AI and innovation priorities.",
      },
      {
        name: "Ailbhe Owens",
        role: "AI Enablement Lead",
        linkedin: "https://www.linkedin.com/in/ailbheowens/",
        committeeRole: "Influencer",
        image: "/people/ailbhe-owens.jpg",
        why: "AI-transformation influencer responsible for internal AI enablement and a strong route into Paddle's AI adoption agenda.",
      },
      {
        name: "Elena Morell",
        role: "Senior Customer Success Manager",
        linkedin: "https://www.linkedin.com/in/elena-morell-8118821b4/",
        committeeRole: "Influencer",
        image: "/people/elena-morell.jpg",
        why: "Customer success influencer close to retention, expansion, strategic growth, and account-level workflows across SaaS customers.",
      },
    ],
    matrix: [
      {
        person: "Rich Mason",
        committeeRole: "Economic Buyer",
        businessPain:
          "Needs measurable expansion revenue impact, stronger NRR, and scalable account growth across a large software customer base",
        fear:
          "In a business built on customers' growth, expansion should be automatic. The fear is being unable to attribute NRR movement to anything his team actually did.",
        alphardRelevance:
          "Alphard can quantify and surface expansion opportunities that revenue teams can act on before they become obvious in the CRM",
        suggestedEntryPoint:
          "Approach after validating the CS workflow with Kirsty Jarvis and building AI alignment with Ailbhe Owens and Andrew Davies",
      },
      {
        person: "Kirsty Jarvis",
        committeeRole: "Champion / User",
        businessPain:
          "Needs better visibility into renewals, account health, expansion readiness, and manual account review workflows",
        fear:
          "Renewals across thousands of accounts run on manual triage. The fear is the important accounts and the loud accounts being treated as the same thing.",
        alphardRelevance:
          "Alphard can turn scattered customer interactions into structured expansion signals for CS teams",
        suggestedEntryPoint:
          "Best first relationship to build at B2Coast or through discovery-led outreach",
      },
      {
        person: "Andrew Davies",
        committeeRole: "Influencer",
        businessPain:
          "Needs innovation programmes that connect AI experimentation to measurable business impact",
        fear:
          "Innovation programmes that never touch the P&L.",
        alphardRelevance:
          "Alphard can be framed as a practical AI layer for customer growth, NRR, and CS productivity",
        suggestedEntryPoint:
          "Engage after Ailbhe Owens validates AI-transformation fit and the account intelligence use case",
      },
      {
        person: "Ailbhe Owens",
        committeeRole: "AI Transformation Influencer",
        businessPain:
          "Needs practical AI adoption use cases that help internal teams work faster and make better customer decisions",
        fear:
          "AI enablement being seen internally as theatre, demos and policies, with no workflow that changed how a team works.",
        alphardRelevance:
          "Alphard gives the AI enablement agenda a shipped workflow: expansion signals surfaced for CS and revenue teams, not another pilot.",
        suggestedEntryPoint:
          "Reach out in parallel before B2Coast and ask whether AI-enabled expansion intelligence fits Paddle's internal AI strategy",
      },
      {
        person: "Elena Morell",
        committeeRole: "Influencer",
        businessPain:
          "Needs practical ways to manage retention, expansion, strategic growth, and account-level customer intelligence",
        fear:
          "Strategic accounts getting the same generic motion as the long tail.",
        alphardRelevance:
          "Alphard gives strategic CSMs a prioritised view of account actions instead of a flat list of customers.",
        suggestedEntryPoint:
          "Reach out in parallel before B2Coast and ask how Paddle surfaces expansion opportunities across strategic SaaS accounts",
      },
    ],
    messagingEntryPoint:
      "Start with Kirsty Jarvis as the champion, Ailbhe Owens as the AI-transformation influencer, and Elena Morell as the CS expansion influencer. Ask how Paddle's CS team surfaces expansion signals, manages renewals, and turns customer interactions into account intelligence. In parallel, ask Ailbhe how Paddle evaluates internal AI use cases and ask Elena how strategic customer teams identify retention risk, expansion opportunities, and growth signals across SaaS accounts.",
    firstMove:
      "Use B2Coast as the warm path. Attend as someone researching AI-driven customer-growth strategies, speak with Kirsty about expansion signals and renewals, then follow up with a hypothesis that Paddle may still rely on manual account plans and CRM notes to spot upsell opportunities. In parallel, build AI alignment with Ailbhe Owens and CS expansion alignment with Elena Morell before asking for a joint path into Rich Mason.",
    committedPlay: {
      eyebrow: "The Play",
      title: "Event-led, with one parallel thread",
      body: "B2Coast is the primary path and the reason this account was picked. The AI attack is not a separate play; it folds in as a single pre-event note to Ailbhe Owens so the event conversation lands warm. Everything else waits for the event.",
      sequence:
        "Register for B2Coast, send Ailbhe the pre-event note, meet Kirsty at the event with a discovery goal, follow up within 48 hours, then ask for the Rich Mason conversation with a written hypothesis.",
      messages: [
        {
          label: "Message to Kirsty",
          text: "Hi Kirsty, I am looking at how London SaaS companies turn customer interactions into expansion intelligence. If you are at B2Coast, I would be curious to ask how Paddle's CS team surfaces expansion signals and manages renewal prep across a large customer base.",
        },
        {
          label: "Message to Ailbhe",
          text: "Hi Ailbhe, Paddle buying ProfitWell told me leadership already believes retention should run on data, and your AI enablement work seems like the internal version of the same idea. I will be at B2Coast and would value 10 minutes on whether AI-surfaced expansion signals fit what you are building internally, or whether the priority sits elsewhere.",
        },
      ],
      inPerson:
        "After the event, follow up with Kirsty referencing the conversation. Share the hypothesis that Paddle's CS team may still rely on manual account plans and CRM notes to spot upsell opportunities, then ask for an introduction to Rich Mason to discuss revenue impact.",
    },
  },
];

const navItems = [
  { number: "01", label: "Title Page", href: "#title" },
  { number: "02", label: "Overview", href: "#overview" },
  { number: "03", label: "DataSnipper", href: "#datasnipper" },
  { number: "04", label: "Xelix", href: "#xelix" },
  { number: "05", label: "Paddle", href: "#paddle" },
  { number: "06", label: "Strategy Logic", href: "#strategy-logic" },
];

function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide",
        className,
      )}
    >
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body,
  number,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  number?: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-5 border-b border-blue-200/70 pb-8 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#557092]">
          {number ? `Page ${number} ` : ""}
          {eyebrow}
        </p>
        <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-[#10203d] md:text-6xl">
          {title}
        </h2>
      </div>
      {body ? (
        <p className="max-w-md text-sm leading-6 text-[#4f607a]">{body}</p>
      ) : null}
    </div>
  );
}

function WhiteCard({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={cn(
        "rounded-2xl border border-white/80 bg-white/95 p-6 text-[#10203d] shadow-[0_24px_70px_rgba(56,93,155,0.14)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

function LinkedInButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-2 text-sm font-semibold text-[#10203d] shadow-sm transition hover:border-[#4169e1]/40 hover:bg-blue-50 hover:text-[#4169e1]"
    >
      <Linkedin className="h-4 w-4" />
      LinkedIn
    </a>
  );
}

function SlidePage({
  id,
  children,
  className,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "min-h-screen scroll-mt-16 px-6 py-24 md:px-10 lg:px-12",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function StrategyBlock({
  eyebrow,
  title,
  body,
  bullets,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  bullets?: string[];
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-blue-100 bg-white/90 p-6 shadow-[0_20px_60px_rgba(56,93,155,0.12)]",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#4169e1]">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#10203d]">
        {title}
      </h3>
      {body ? (
        <p className="mt-4 text-sm leading-6 text-[#4f607a]">{body}</p>
      ) : null}
      {bullets ? (
        <ul className="mt-5 space-y-3 text-sm leading-6 text-[#4f607a]">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4169e1]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {children}
    </div>
  );
}

function NumberedSteps({
  steps,
  columns = "md:grid-cols-4",
}: {
  steps: [string, string, string][];
  columns?: string;
}) {
  return (
    <div className={cn("mt-6 grid gap-5", columns)}>
      {steps.map(([step, title, body]) => (
        <div key={step} className="border-l border-blue-100 pl-4">
          <p className="text-sm font-semibold text-[#4169e1]">{step}</p>
          <h3 className="mt-3 text-lg font-semibold text-[#10203d]">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[#4f607a]">{body}</p>
        </div>
      ))}
    </div>
  );
}

function CompactCommitteeList({ company }: { company: Company }) {
  return (
    <div className="mb-8">
      <div className="mb-4 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#74829a]">
            Buying Committee
          </p>
          <h3 className="mt-2 text-3xl font-semibold tracking-tight text-[#10203d]">
            Decision makers
          </h3>
        </div>
        <p className="max-w-xl text-sm leading-6 text-[#4f607a]">
          Compact committee view only. The matrix below carries the full pain,
          relevance, fear, and entry-point logic.
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {company.people.map((person) => (
          <div
            key={person.name}
            className="rounded-2xl border border-blue-100 bg-white/90 p-4 shadow-[0_14px_34px_rgba(56,93,155,0.10)]"
          >
            <p className="text-lg font-semibold text-[#10203d]">
              {person.name}
            </p>
            <p className="mt-1 text-sm leading-6 text-[#4f607a]">
              {person.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MatrixTable({ company }: { company: Company }) {
  const influencerCount = company.matrix.filter((row) =>
    row.committeeRole.toLowerCase().includes("influencer"),
  ).length;

  return (
    <div>
      <div className="mb-7">
        <h3 className="text-5xl font-light tracking-[-0.06em] text-[#10203d] md:text-7xl">
          The Buying Committee{" "}
          <span className="block font-black italic text-[#4169e1]">Matrix</span>
        </h3>
        {influencerCount > 1 ? (
          <p className="mt-5 max-w-3xl text-sm leading-6 text-[#4f607a]">
            This account has multiple influencer paths. If one influencer does
            not respond, the outreach can move to another CS, account
            management, RevOps, or executive stakeholder without losing the
            account thread.
          </p>
        ) : null}
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {company.matrix.map((row, index) => (
          (() => {
            const person = company.people.find(
              (member) =>
                member.name === row.person ||
                member.name.startsWith(row.person) ||
                row.person.startsWith(member.name),
            );

            return (
              <div
                key={`${company.name}-${row.person}`}
                className="min-h-[33rem] rounded-2xl border border-blue-100 bg-white/90 p-7 shadow-[0_20px_60px_rgba(56,93,155,0.12)]"
              >
                <h4 className="text-3xl font-black tracking-[-0.05em] text-[#10203d]">
                  {row.person}
                </h4>
                <p
                  className={cn(
                    "mt-7 text-sm font-black uppercase tracking-[0.28em]",
                    index === 0 && "text-[#4169e1]",
                    index === 1 && "text-[#1ea7a8]",
                    index === 2 && "text-[#6f7df4]",
                    index > 2 && "text-[#557092]",
                  )}
                >
                  {row.committeeRole}
                </p>
                {person?.image ? (
                  <div className="mt-5 overflow-hidden rounded-2xl border border-blue-100 bg-[#eef7ff]">
                    <img
                      src={person.image}
                      alt={`${person.name} profile`}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                ) : null}
                {person ? (
                  <div className="mt-5">
                    <LinkedInButton href={person.linkedin} />
                  </div>
                ) : null}

                <div className="mt-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#74829a]">
                    Primary objective
                  </p>
                  <p className="mt-4 text-2xl font-semibold leading-tight text-[#10203d]">
                    {row.businessPain}
                  </p>
                </div>

                <div className="mt-8 rounded-2xl border border-blue-100 bg-[#eef7ff] p-5">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#4169e1]">
                    The fear
                  </p>
                  <p className="mt-4 text-base italic leading-7 text-[#4f607a]">
                    {row.fear}
                  </p>
                </div>

                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#74829a]">
                    Alphard relevance
                  </p>
                  <p className="mt-4 text-sm leading-6 text-[#4f607a]">
                    {row.alphardRelevance}
                  </p>
                </div>

                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#74829a]">
                    Entry point
                  </p>
                  <p className="mt-4 text-sm leading-6 text-[#4f607a]">
                    {row.suggestedEntryPoint}
                  </p>
                </div>
              </div>
            );
          })()
        ))}
      </div>
    </div>
  );
}

function CommittedPlaySection({ play }: { play: CommittedPlay }) {
  return (
    <div>
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#74829a]">
          {play.eyebrow}
        </p>
        <h3 className="mt-2 text-3xl font-semibold tracking-tight text-[#10203d]">
          {play.title}
        </h3>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-2xl border border-blue-100 bg-white/90 p-6 shadow-[0_20px_60px_rgba(56,93,155,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4169e1]">
            Committed route
          </p>
          <p className="mt-5 text-sm leading-6 text-[#4f607a]">
            {play.body}
          </p>
          {play.sequence ? (
            <>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#74829a]">
                Sequence
              </p>
              <p className="mt-3 text-sm leading-6 text-[#4f607a]">
                {play.sequence}
              </p>
            </>
          ) : null}
          {play.inPerson ? (
            <div className="mt-5 rounded-2xl border border-[#4169e1]/20 bg-blue-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4169e1]">
                In-person motion
              </p>
              <p className="mt-3 text-sm leading-6 text-[#4f607a]">
                {play.inPerson}
              </p>
            </div>
          ) : null}
        </div>
        <div className="grid gap-5">
          {play.messages?.map((message) => (
          <div
            key={message.label}
            className="rounded-2xl border border-blue-100 bg-white/90 p-6 shadow-[0_20px_60px_rgba(56,93,155,0.12)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4169e1]">
              {message.label}
            </p>
            <p className="mt-5 text-sm italic leading-6 text-[#4f607a]">
              {message.text}
            </p>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CompanyStrategyPage({
  company,
  number,
}: {
  company: Company;
  number: string;
}) {
  return (
    <SlidePage id={company.id} className="py-20">
      <SectionHeading
        number={number}
        eyebrow="Account Strategy"
        title={company.name}
        body={company.headline}
      />

      <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_0.95fr]">
        <div className="rounded-2xl border border-blue-100 bg-white/90 p-6 shadow-[0_20px_60px_rgba(56,93,155,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4169e1]">
            What they do
          </p>
          <p className="mt-4 text-sm leading-6 text-[#4f607a]">
            {company.whatTheyDo}
          </p>
        </div>
        <div className="rounded-2xl border border-blue-100 bg-white/90 p-6 shadow-[0_20px_60px_rgba(56,93,155,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4169e1]">
            Why Alphard cares
          </p>
          <p className="mt-4 text-sm leading-6 text-[#4f607a]">
            {company.whyAlphardCares}
          </p>
        </div>
      </div>

      {company.whyNow ? (
        <div className="mb-8">
          <StrategyBlock
            eyebrow="Timing"
            title="Why now"
            bullets={company.whyNow}
          />
        </div>
      ) : null}

      {company.strategicAdvantage ? (
        <div className="mb-8 rounded-2xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-[#eaf3ff] p-6 shadow-[0_24px_70px_rgba(56,93,155,0.14)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4169e1]">
            Ecosystem Access
          </p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#10203d]">
            {company.strategicAdvantage.title}
          </h3>
          <p className="mt-4 max-w-4xl text-sm leading-6 text-[#4f607a]">
            {company.strategicAdvantage.body}
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-white/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#74829a]">
                Advantage 1
              </p>
              <h4 className="mt-3 text-xl font-semibold tracking-tight text-[#10203d]">
                Direct account attack
              </h4>
              <p className="mt-3 text-sm leading-6 text-[#4f607a]">
                {company.strategicAdvantage.whyItMatters}
              </p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-white/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4169e1]">
                Advantage 2
              </p>
              <h4 className="mt-3 text-xl font-semibold tracking-tight text-[#10203d]">
                Ecosystem access to Alphard ICPs
              </h4>
              <p className="mt-3 text-sm leading-6 text-[#4f607a]">
                {company.strategicAdvantage.attackAngle}
              </p>
            </div>
          </div>
        </div>
      ) : null}

      <CompactCommitteeList company={company} />

      <div className="mb-8">
        <MatrixTable company={company} />
      </div>

      {company.connectorRoutes ? (
        <div className="mb-8">
          <StrategyBlock
            eyebrow="Connector Routes"
            title="Connector routes"
            bullets={company.connectorRoutes}
          />
        </div>
      ) : null}

      <div className="mt-8">
        <CommittedPlaySection play={company.committedPlay} />
      </div>
    </SlidePage>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("title");

  useEffect(() => {
    const syncPageFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (navItems.some((item) => item.href === `#${hash}`)) {
        setActivePage(hash);
      }
    };

    syncPageFromHash();
    window.addEventListener("hashchange", syncPageFromHash);
    return () => window.removeEventListener("hashchange", syncPageFromHash);
  }, []);

  const goToPage = (pageId: string) => {
    setActivePage(pageId);
    setMenuOpen(false);
    window.history.replaceState(null, "", `#${pageId}`);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_20%_0%,rgba(204,229,255,0.95),transparent_36%),linear-gradient(180deg,#edf7ff_0%,#f8fbff_48%,#eef6ff_100%)]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-blue-100/80 bg-white/82 backdrop-blur-xl">
        <div className="flex h-16 items-center justify-between px-6 lg:px-8">
          <a href="#title" className="inline-flex items-center">
            <span className="bg-white px-1.5 py-1 text-sm font-black tracking-[-0.03em] text-[#10203d] md:text-base">
              Alphard Strategy
            </span>
            <span className="bg-[#10203d] px-1.5 py-1 text-sm font-black tracking-[-0.03em] text-white md:text-base">
              Hub
            </span>
          </a>
          <div className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#557092] md:flex">
            Alphard Strategy Hub
          </div>
          <div className="relative md:hidden">
            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen((open) => !open)}
              className="rounded-lg p-1 text-[#10203d]"
            >
              <Menu className="h-7 w-7" />
            </button>
            {menuOpen ? (
              <div className="absolute right-0 top-10 w-72 rounded-2xl border border-blue-100 bg-white/95 p-2 shadow-[0_24px_70px_rgba(56,93,155,0.18)]">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => goToPage(item.href.slice(1))}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm hover:bg-blue-50",
                      activePage === item.href.slice(1)
                        ? "text-[#10203d]"
                        : "text-[#557092]",
                    )}
                  >
                    <span className="font-semibold text-[#4169e1]">
                      {item.number}
                    </span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
          <Menu className="hidden h-7 w-7 text-[#10203d] md:block" />
        </div>
      </header>

      <aside className="fixed left-0 top-16 z-40 hidden h-[calc(100vh-4rem)] w-72 border-r border-blue-100/80 bg-white/72 px-6 py-8 backdrop-blur-xl lg:block">
        <nav className="flex h-full flex-col justify-between">
          <div className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => goToPage(item.href.slice(1))}
                className={cn(
                  "group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition hover:bg-blue-50 hover:text-[#10203d]",
                  activePage === item.href.slice(1)
                    ? "bg-white text-[#10203d] shadow-sm"
                    : "text-[#557092]",
                )}
              >
                <span
                  className={cn(
                    "font-semibold group-hover:text-[#4169e1]",
                    activePage === item.href.slice(1)
                      ? "text-[#4169e1]"
                      : "text-[#8fa0b8]",
                  )}
                >
                  {item.number}
                </span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
          <div className="border-t border-blue-100 pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#74829a]">
              Strategy 2026
            </p>
            <p className="mt-2 text-sm text-[#557092]">Assignment hub</p>
          </div>
        </nav>
      </aside>

      <div className="lg:pl-72">
        {activePage === "title" ? (
          <section id="title" className="flex min-h-screen items-center justify-center px-6 pt-16 text-center md:px-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.58em] text-[#557092]">
                Strategy 2026
              </p>
              <h1 className="mt-7 text-4xl font-black tracking-[-0.06em] text-[#10203d] md:text-7xl lg:text-8xl">
                Alphard Strategy Hub
              </h1>
              <p className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-8 text-[#4f607a]">
                Alphard Attack Strategy for DataSnipper, Xelix, and Paddle.
              </p>
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={() => goToPage("overview")}
                  className="inline-flex items-center gap-2 rounded-full bg-[#4169e1] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(65,105,225,0.28)] transition hover:bg-[#3158d5]"
                >
                  Open campaign hub
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </section>
        ) : null}

        {activePage === "overview" ? (
          <SlidePage id="overview">
            <SectionHeading
              number="02"
              eyebrow="Overview"
              title="Alphard attack strategy"
              body="Break into three post-sales SaaS teams by validating expansion workflow pain with credible champions and influencers, while building parallel buyer access through London industry events."
            />

            <StrategyBlock
              eyebrow="How the ICP was refined"
              title="How the ICP was refined"
              body="DataSnipper and Xelix share a pattern: B2B SaaS, roughly 100 to 600 employees, a large enterprise customer base, a named post-sales leadership layer, and a recent growth event that makes expansion a board-level topic. That pattern became the filter for the third account."
            >
              <NumberedSteps
                columns="md:grid-cols-5"
                steps={[
                  ["01", "B2B SaaS", "100 to 600 employees."],
                  ["02", "Large customer portfolio", "Expansion signals outnumber the team's capacity to spot them."],
                  ["03", "Named CS or AM org", "Dedicated leadership proves the budget line exists."],
                  ["04", "Recent forcing event", "Funding round, new vertical push, or NRR pressure."],
                  ["05", "London or EU base", "Warm event routes are realistic."],
                ]}
              />
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#74829a]">
                  Shortlist considered
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {[
                    ["Attest", "Rejected", "Fits the size band but the strategic CS layer is too thin to need tooling yet."],
                    ["Synthesia", "Rejected", "Right size, but heavily product-led with a self-serve motion. Expansion is usage-driven, not account-managed."],
                    ["Beamery", "Rejected", "Fits on paper, but recent restructuring makes new tooling budget unlikely."],
                    ["Paddle", "Selected", "Around 300 employees, London HQ, 10,000+ software customers, an AI enablement function, and its own community event (B2Coast) that doubles as a gateway to other ICP accounts."],
                  ].map(([company, status, reason]) => (
                    <div
                      key={company}
                      className="rounded-2xl border border-blue-100 bg-[#eef7ff] p-5"
                    >
                      <p className="text-lg font-semibold text-[#10203d]">
                        {company}
                      </p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#4169e1]">
                        {status}
                      </p>
                      <p className="mt-4 text-sm leading-6 text-[#4f607a]">
                        {reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </StrategyBlock>

            <div className="mt-5 rounded-2xl border border-blue-100 bg-white/90 p-6 shadow-[0_20px_60px_rgba(56,93,155,0.12)]">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#74829a]">
                Attack Sequence
              </p>
              <NumberedSteps
                steps={[
                  ["01", "Champion and influencer discovery", "Ask champions and influencers how account reviews, renewal prep, and expansion signals are handled today."],
                  ["02", "Pain validation", "Look for manual research, scattered notes, CRM hygiene gaps, and inconsistent account planning."],
                  ["03", "Buyer hypothesis", "Convert the validated workflow into a concise business case for CS or account leadership."],
                  ["04", "Expansion wedge", "Position Alphard around expansion intelligence, account prioritisation, and repeatable post-sales execution."],
                ]}
              />
            </div>

            <div className="mt-5 rounded-2xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-[#eaf3ff] p-6 shadow-[0_20px_60px_rgba(56,93,155,0.12)]">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#4169e1]">
                Parallel Attack
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#10203d]">
                Connect with buyers at London industry events
              </h3>
              <p className="mt-4 max-w-4xl text-sm leading-6 text-[#4f607a]">
                While messaging champions and influencers, run a parallel event
                path to meet economic buyers at London industry events, partner
                forums, roundtables, and finance or customer success gatherings.
                The goal is not to pitch cold. The goal is to create warm
                context, understand strategic priorities, and then follow up
                with a sharper account-specific hypothesis.
              </p>
            </div>
          </SlidePage>
        ) : null}

        {activePage === "datasnipper" ? (
          <CompanyStrategyPage company={companies[0]} number="03" />
        ) : null}

        {activePage === "xelix" ? (
          <CompanyStrategyPage company={companies[1]} number="04" />
        ) : null}

        {activePage === "paddle" ? (
          <CompanyStrategyPage company={companies[2]} number="05" />
        ) : null}

        {activePage === "strategy-logic" ? (
          <SlidePage id="strategy-logic">
            <SectionHeading
              number="06"
              eyebrow="Strategy Logic"
              title="Why two-pronged attack"
              body="A sharper enterprise conversation starts with people closest to the workflow, then uses warm event routes where relationship context matters."
            />
            <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
              <WhiteCard>
                <div className="rounded-xl bg-gradient-to-br from-[#10203d] via-[#1a3566] to-[#4169e1] p-5 text-white">
                  <Network className="h-7 w-7" />
                  <h3 className="mt-8 text-3xl font-semibold tracking-tight">
                    Pain-led discovery before buyer pitch
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    Champions and influencers are more likely to respond because the pain is visible in their day-to-day work.
                  </p>
                </div>
              </WhiteCard>
              <WhiteCard>
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-blue-50 p-3 text-[#4169e1]">
                    <Layers3 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#10203d]">
                      Why champion and influencer first makes sense
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-600">
                      Champions and influencers own the clearest pain points: account reviews, renewal prep, customer health, expansion signals, AI adoption, and account prioritisation. They can see the instant value of Alphard being onboarded before a buyer is asked for budget.
                    </p>
                    <p className="mt-4 text-base leading-7 text-slate-600">
                      The first move should not be to tell leadership their team has problems. The first move is to validate the workflow with credible operators, then convert that discovery into a professional, hypothesis-led conversation with the buyer.
                    </p>
                  </div>
                </div>
              </WhiteCard>
            </div>
            <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <WhiteCard>
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-blue-50 p-3 text-[#4169e1]">
                    <CalendarDays className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#10203d]">
                      Why event and warm connections matter
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-600">
                      Enterprise outreach is becoming more relationship based. For companies with active events, webinars, partner ecosystems, or community programmes, the better route is to build warm context first, then follow up with a specific account insight rather than a cold generic pitch.
                    </p>
                  </div>
                </div>
              </WhiteCard>
              <WhiteCard>
                <div className="rounded-xl border border-blue-100 bg-[#eef7ff] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#74829a]">
                    The Calls
                  </p>
                  <div className="mt-5 space-y-4 text-sm leading-6 text-[#4f607a]">
                    <p>
                      <span className="font-semibold text-[#10203d]">DataSnipper:</span>{" "}
                      messaging attack. Champion path is clear, no credible event route, the Series B and vertical expansion give the message a reason to exist today. Dropped: the London event list.
                    </p>
                    <p>
                      <span className="font-semibold text-[#10203d]">Xelix:</span>{" "}
                      messaging attack, timed to the Series B. Small post-sales org, visible pain, investor pressure incoming. Dropped: events entirely.
                    </p>
                    <p>
                      <span className="font-semibold text-[#10203d]">Paddle:</span>{" "}
                      event-led through B2Coast, with one pre-event note to the AI enablement lead. Dropped: cold outreach to the CRO before the event.
                    </p>
                  </div>
                  <p className="mt-5 text-base font-semibold leading-7 text-[#10203d]">
                    One account leads with events, two lead with messaging. Both routes end the same way: a validated workflow insight that earns the buyer conversation.
                  </p>
                </div>
              </WhiteCard>
            </div>
            <div className="mt-4">
              <StrategyBlock eyebrow="Sprint Plan" title="14-day run plan">
                <NumberedSteps
                  columns="md:grid-cols-2 xl:grid-cols-3"
                  steps={[
                    ["Days 1 to 2", "Verify", "Confirm titles, check open CS and AM roles at all three companies, pull the most recent relevant post from each champion and influencer, map mutual connections and the Insight Partners route. Kill any contact whose role changed."],
                    ["Days 2 to 3", "Warm the ground", "Connection requests with no pitch. Follow and engage with one piece of content per champion. Register for B2Coast."],
                    ["Days 3 to 5", "Champion first touch", "Send Channalyn (DataSnipper), Hannah (Xelix), and the Ailbhe pre-event note (Paddle). Three messages, each carrying one verified trigger."],
                    ["Days 5 to 7", "One influencer per account", "Dirk at DataSnipper, Sam at Xelix. Different angle from the champion message, never a copy."],
                    ["Days 7 to 10", "Follow-ups", "One follow-up per silent thread, each adding a new specific observation, never bumping this. Rotate to the next influencer (Taylor, then Lauren at DataSnipper; Sarah at Xelix) only after the follow-up also goes silent."],
                    ["Days 10 to 14", "Escalate or hold", "Escalate to Jamie Ryan or Paris Haig only where a champion or influencer has confirmed the pain. The escalation message references the discovery conversation by name. No confirmation, no buyer touch; hold and re-enter through the connector route instead."],
                  ]}
                />
              </StrategyBlock>
            </div>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <StrategyBlock
                eyebrow="Validation"
                title="What validated pain means"
                body="A champion or influencer confirms at least one of: account prep is manual, expansion signals are spotted by individual judgment, renewal context lives in scattered notes, or there is no systematic whitespace view."
              />
              <StrategyBlock
                eyebrow="Sprint Metric"
                title="Success metric for the sprint"
                body="Two discovery calls booked from nine first-touches, and one warm buyer path opened (intro requested or escalation sent with a named reference). Below that, the hypothesis or the messaging is wrong; revisit triggers before sending more volume."
              />
              <StrategyBlock
                eyebrow="Messaging"
                title="Message rules"
                bullets={[
                  "The swap test: if the message still works with a different name and company, it does not get sent.",
                  "One verified trigger per message: a funding event, a post, a hire, an acquisition. Assumptions are for the hypothesis, not the message.",
                  "Speak Alphard's language where it earns its place: book, plays, expansion signals, NRR. It shows the homework without saying I did my homework.",
                ]}
              />
            </div>
          </SlidePage>
        ) : null}
      </div>
    </main>
  );
}
