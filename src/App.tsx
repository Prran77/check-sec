import { useEffect, useMemo, useState } from "react";
import { languageTypes, languages, type Language, type LanguageType } from "./data/languages";
import Prism from 'prismjs';

// Import core languages
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-haskell';
import 'prismjs/components/prism-lisp';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-perl';
import 'prismjs/components/prism-scala';
import 'prismjs/components/prism-dart';
import 'prismjs/components/prism-lua';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-nasm';

// Import themes
import 'prism-themes/themes/prism-material-dark.css';
import 'prism-themes/themes/prism-material-light.css';

function getLanguageClass(langName: string): string {
  const langMap: Record<string, string> = {
    'C': 'c',
    'C++': 'cpp',
    'Rust': 'rust',
    'JavaScript': 'javascript',
    'TypeScript': 'typescript',
    'Python': 'python',
    'R': 'r',
    'Java': 'java',
    'Go': 'go',
    'C#': 'csharp',
    'Swift': 'swift',
    'Kotlin': 'kotlin',
    'Haskell': 'haskell',
    'Lisp': 'lisp',
    'Ruby': 'ruby',
    'PHP': 'php',
    'SQL': 'sql',
    'Assembly': 'nasm',
    'Perl': 'perl',
    'Scala': 'scala',
    'Dart': 'dart',
    'Lua': 'lua',
    'Shell': 'bash',
  };
  return langMap[langName] || 'clike';
}

function highlightCode(code: string, langName: string): string {
  const lang = getLanguageClass(langName);
  const grammar = Prism.languages[lang] ?? Prism.languages.clike;
  return Prism.highlight(code, grammar, lang);
}

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
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(timer);
  }, [query]);

  const filteredLanguages = useMemo(() => {
    return languages.filter((language) => {
      const matchesType = activeType === "All" || language.type === activeType;
      const matchesQuery = `${language.name} ${language.creator} ${language.tagline}`
        .toLowerCase()
        .includes(debouncedQuery.toLowerCase());

      return matchesType && matchesQuery;
    });
  }, [activeType, debouncedQuery]);

  const groupedLanguages = useMemo(() => {
    return languageTypes
      .map((type) => ({
        type,
        languages: filteredLanguages.filter((language) => language.type === type),
      }))
      .filter((group) => group.languages.length > 0);
  }, [filteredLanguages]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(selectedLanguage.helloWorld);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

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
            onChange={() => setTheme((current) => {
              const newTheme = current === "dark" ? "light" : "dark";
              localStorage.setItem('theme', newTheme);
              return newTheme;
            })}
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
            <div className="codeBlock">
              <pre>
                <code 
                  className={`language-${getLanguageClass(selectedLanguage.name)}`}
                  dangerouslySetInnerHTML={{ __html: highlightCode(selectedLanguage.helloWorld, selectedLanguage.name) }}
                />
              </pre>
              <button className="copyButton" onClick={copyToClipboard}>
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
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

          <section>
            <h3>Geeky Details</h3>
            <dl className="geekDetails">
              <dt>Paradigms</dt>
              <dd>{selectedLanguage.paradigms?.join(", ") || "Not specified"}</dd>
              <dt>Memory Model</dt>
              <dd>{selectedLanguage.memoryModel || "Not specified"}</dd>
              <dt>Ecosystem</dt>
              <dd>{selectedLanguage.ecosystem || "Not specified"}</dd>
            </dl>
          </section>
        </aside>
      </section>
    </main>
  );
}

export default App;
