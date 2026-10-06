import { Section } from "@/components/section";
import { education, experience, languages } from "@/content/experience";
import { delay } from "@/lib/motion";

const focusAreas = [
  {
    title: "Retrieval & RAG",
    body: "Chunking, embeddings, pgvector and hybrid search, with answers that cite the pages they came from.",
    proof: "AI Knowledge Base, Northstar",
  },
  {
    title: "Voice AI",
    body: "Real-time STT → LLM → TTS pipelines over telephony and the browser, tuned for Georgian.",
    proof: "Proxycall, AI-Cruter",
  },
  {
    title: "Agents & tools",
    body: "LLMs that act through typed tools and MCP, with permissions and business rules enforced in code.",
    proof: "Northstar, Proxycall",
  },
  {
    title: "Full-stack product",
    body: "Next.js and TypeScript frontends on FastAPI or Node.js backends, from schema to deployment.",
    proof: "Mentori, earlier builds",
  },
];

const [current] = experience;
const previous = experience.filter((entry) => !entry.period.endsWith("Present"));

const facts = [
  { term: "Currently", detail: `${current.role}, ${current.company}` },
  { term: "Previously", detail: previous.map((entry) => entry.company).join(", ") },
  { term: "Education", detail: `${education.program}, ${education.institution} (${education.year})` },
  { term: "Languages", detail: languages.join(", ") },
];

export function About() {
  return (
    <Section
      id="about"
      index="01"
      label="About"
      title={
        <>
          I build the whole system: interface, API, data and the{" "}
          <span className="font-serif font-normal italic">model layer</span>.
        </>
      }
      intro="I started in frontend with React and Next.js, moved into full-stack work with Node.js, Python and PostgreSQL, and now build LLM applications full time. I care most about the parts that make AI features reliable: grounded retrieval, deterministic guardrails and tests."
    >
      <div className="grid gap-12 md:grid-cols-12">
        <ol className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 md:col-span-8">
          {focusAreas.map((area, i) => (
            <li
              key={area.title}
              data-reveal
              style={delay(i * 70)}
              className="flex flex-col bg-paper p-6 transition-colors duration-300 hover:bg-paper-raised md:p-7"
            >
              <span className="label text-muted">0{i + 1}</span>
              <h3 className="mt-6 text-lg font-medium tracking-tight">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pretty text-muted">{area.body}</p>
              <p className="mt-auto pt-6 font-mono text-[0.6875rem] text-ink-soft">
                <span className="text-muted">See: </span>
                {area.proof}
              </p>
            </li>
          ))}
        </ol>

        <dl className="md:col-span-4" data-reveal style={delay(120)}>
          {facts.map((fact) => (
            <div key={fact.term} className="border-b border-line py-4 first:pt-0">
              <dt className="label text-muted">{fact.term}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed">{fact.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
