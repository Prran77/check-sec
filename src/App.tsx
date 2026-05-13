import { useMemo, useState } from "react";
import { languageTypes, languages, type Language, type LanguageType } from "./data/languages";

const typeDescriptions: Record<LanguageType, string> = {
  Systems: "Close to the metal, tuned for control, speed, and serious consequences.",
  "Web Frontend": "Languages that shape what users see, click, and occasionally inspect in devtools.",
  Backend: "Server-side workhorses for APIs, business logic, jobs, and infrastructure.",
  "Data & Scientific": "Tools for analysis, research, modeling, and numerical wizardry.",
  Mobile: "Languages built or adopted for pocket-sized computers with very strong opinions.",
  Functional: "Expression-first languages where functions, types, and abstractions take the wheel.",
  Scripting: "Fast-moving glue languages for automation, web pages, and productive experiments.",
  Database: "Languages for asking structured data very precise questions.",
};

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeType, setActiveType] = useState<LanguageType | "All">("All");
  const [query, setQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);

  const filteredLanguages = useMemo(() => {
    return languages.filter((language) => {
      const matchesType = activeType === "All" || language.type === activeType;
      const matchesQuery = `${language.name} ${language.creator} ${language.tagline}`
        .toLowerCase()
        .includes(query.toLowerCase());

      return matchesType && matchesQuery;
    });
  }, [activeType, query]);

  const groupedLanguages = useMemo(() => {
    return languageTypes
      .map((type) => ({
        type,
        languages: filteredLanguages.filter((language) => language.type === type),
      }))
      .filter((group) => group.languages.length > 0);
  }, [filteredLanguages]);

  return (
    <main className="app" data-theme={theme}>
      <section className="hero" aria-labelledby="page-title">
        <div className="heroVisual" aria-hidden="true">
          <div className="terminal">
            <span>booting /usr/local/code-atlas</span>
            <span>indexing languages... {languages.length} found</span>
            <span>loading facts, folklore, and semicolons</span>
            <span className="prompt">atlas --open --geek-mode</span>
          </div>
          <div className="orbit orbitOne">TS</div>
          <div className="orbit orbitTwo">PY</div>
          <div className="orbit orbitThree">RS</div>
          <div className="orbit orbitFour">SQL</div>
        </div>

        <div className="heroContent">
          <p className="eyebrow">Static web app / language field guide</p>
          <h1 id="page-title">Code Atlas</h1>
          <p className="lede">
            Popular programming languages sorted by type, with origin stories, nerdy facts,
            Hello World snippets, and the odd cultural easter egg.
          </p>
          <div className="heroStats" aria-label="Site statistics">
            <span>{languages.length} languages</span>
            <span>{languageTypes.length} categories</span>
            <span>Azure-ready</span>
          </div>
        </div>
      </section>

      <section className="controls" aria-label="Language filters">
        <label className="search">
          <span>Search</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try Python, systems, Microsoft..."
          />
        </label>

        <div className="typeTabs" role="tablist" aria-label="Language type">
          <button
            className={activeType === "All" ? "active" : ""}
            type="button"
            onClick={() => setActiveType("All")}
          >
            All
          </button>
          {languageTypes.map((type) => (
            <button
              className={activeType === type ? "active" : ""}
              key={type}
              type="button"
              onClick={() => setActiveType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <label className="themeToggle">
          <span>Light</span>
          <input
            checked={theme === "light"}
            onChange={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
            type="checkbox"
          />
          <span className="switch" aria-hidden="true" />
        </label>
      </section>

      <section className="layout">
        <div className="languageGroups" aria-label="Programming languages">
          {groupedLanguages.length === 0 ? (
            <div className="emptyState">No language matched that query.</div>
          ) : (
            groupedLanguages.map((group) => (
              <section className="languageGroup" key={group.type} aria-labelledby={`${group.type}-title`}>
                <div className="groupHeader">
                  <h2 id={`${group.type}-title`}>{group.type}</h2>
                  <p>{typeDescriptions[group.type]}</p>
                </div>
                <div className="cards">
                  {group.languages.map((language) => (
                    <button
                      className={selectedLanguage.name === language.name ? "languageCard selected" : "languageCard"}
                      key={language.name}
                      type="button"
                      onClick={() => setSelectedLanguage(language)}
                    >
                      <span className="cardMeta">{language.year}</span>
                      <strong>{language.name}</strong>
                      <span>{language.tagline}</span>
                    </button>
                  ))}
                </div>
              </section>
            ))
          )}
        </div>

        <aside className="details" aria-label={`${selectedLanguage.name} details`}>
          <div className="detailsHeader">
            <span>{selectedLanguage.type}</span>
            <h2>{selectedLanguage.name}</h2>
            <p>
              Created by {selectedLanguage.creator} in {selectedLanguage.year}.
            </p>
          </div>

          <section>
            <h3>History</h3>
            <p>{selectedLanguage.history}</p>
          </section>

          <section>
            <h3>Hello World</h3>
            <pre>
              <code>{selectedLanguage.helloWorld}</code>
            </pre>
          </section>

          <section>
            <h3>Fun Facts</h3>
            <ul>
              {selectedLanguage.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3>Easter Eggs</h3>
            <ul>
              {selectedLanguage.easterEggs.map((egg) => (
                <li key={egg}>{egg}</li>
              ))}
            </ul>
          </section>
        </aside>
      </section>
    </main>
  );
}

export default App;
