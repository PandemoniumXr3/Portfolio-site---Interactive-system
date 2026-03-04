const termOut = document.getElementById("termOut");
const termForm = document.getElementById("termForm");
const termIn = document.getElementById("termIn");

const viewerTitle = document.getElementById("viewerTitle");
const viewerBody = document.getElementById("viewerBody");
const clockEl = document.getElementById("clock");

const state = {
    user: "mike",
    host: "m00n",
    cwd: "~",
};

const projects = {
    app1: {
        title: "App 1: Concept UI",
        html: `
      <p class="big"><b>App 1</b> (UI concept)</p>
      <p>Hier komt mijn ontwerp: screenshot of korte uitleg.</p>
      <ul>
        <li>Rol: UX/UI + visual</li>
        <li>Tools: Figma, Illustrator</li>
        <li>Focus: clean + cyber</li>
      </ul>
      <p>Tip: zet je afbeelding in <code>assets/projects/app1.png</code>.</p>
    `
    },
    app2: {
        title: "App 2: Branding / Web",
        html: `
      <p class="big"><b>App 2</b></p>
      <p>Case: f@society/M00N style branding of website component.</p>
    `
    }
};

function nowClock() {
    const d = new Date();
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    clockEl.textContent = `${hh}:${mm}`;
}
setInterval(nowClock, 1000);
nowClock();

function print(line = "") {
    termOut.textContent += line + "\n";
    termOut.scrollTop = termOut.scrollHeight;
}

function setViewer(title, html) {
    viewerTitle.textContent = title;
    viewerBody.innerHTML = html;
}

function help() {
    print("commands:");
    print("  help                show commands");
    print("  about               who is mike");
    print("  projects            list projects");
    print("  open <name>         open project (e.g. open app1)");
    print("  clear               clear terminal");
    print("  contact             show contact");
}

function about() {
    setViewer("About", `
    <p class="big"><b>Mike Ramírez</b></p>
    <h3>Design | Coding/Programming | Hardware/Tech | Cybersecurity|</h3>
    <p>Dit portfolio is ontworpen als een live systeem: u navigeert! En kiest wat u wil
    zien of weten.

    <h4> Wat doe ik? </h4>
    <p>
    Ik leer mijzelf om systemen te bouwen, designen en te beveiligen. Ik bedenk graag creatieve concepten voor alles wat in mij opkomt en ik 
    zelf mis in mijn dagelijks leven. Of waarbij ik denk dat het beter/mooier/veiliger zou kunnen.
    Voor mij persoonlijk is dit een geautomatiseerd proces in mijn brein. En tegelijk een van de redenen waarom de huidige
    systemen niet goed bij mij (en helaas vele anderen) aansluiten. Daarom weet ik hoe vervelend en tegelijkertijd belangrijk het is om een werkend, functioneel
    en voorral ook veilig systeem te hebben tegenwoordig. En waar het vaak foutgaat in onderandere design structuur maar ook
    beveiliging en de logica en functie van het desbetrefende systeem. 

    </p> 

    <h4> Waarom? </h4>
    <p>
    Ik pas zelf vaak niet in de huidige systemen. En daardoor ben ik mijn eigen systeem(en) gaan bouwen, bedenken, ontwerpen &
    beveiligen.
    Die zo optimaal mogelijk functioneren zoals ik het zelf mis of had willen zien. Ik leer snel en ben altijd verder aan het leren!
    Ik heb Autisme & ADHD waardoor mijn brein snel en veel denkt maar ook diep en logisch. Ik mis geen details, Ik overzie oplossingen voor problemen 
    die nog niet bestaan en denk vooruit en niet alleen in het nu. En ik kom altijd met creatieve en praktische concepten waar anderen nooit bij zouden komen. Doordat mijn brein geen filter heeft zie en merk ik alles.
     Dit kan mega frustrerend zijn in systemen die niet zijn bedoeld voor mijn manier van werken. In IT is dit 
    juist mijn kracht. Ik denk in logica, systemen en patronen en blijf tegelijkertijd realistische en praktische waardoor de systemen ook werken. 
    Mijn brein zou je kunnen vergelijken met een computer. En als je kan denken als een computer kan je er automatische goed mee omgaan waardoor het voor mij heel natuurlijk en logische voelt en ik er daardoor goed in ben en voorral razendsnel leer."
    </p>
  `);
    print("Opened: about");
}

function listProjects() {
    const names = Object.keys(projects);
    print("projects:");
    names.forEach(n => print(`  ${n}  - ${projects[n].title}`));
    setViewer("Projects", `
    <p class="big"><b>Projects</b></p>
    <p>Typ <code>open app1</code> of <code>open app2</code>.</p>
    <p>Later kun je ook: <code>open web1</code>, <code>open brand1</code>, etc.</p>
  `);
}

function openProject(name) {
    const p = projects[name];
    if (!p) {
        print(`Error: project "${name}" not found. Try: projects`);
        return;
    }
    setViewer(p.title, p.html);
    print(`Opened: ${name}`);
}

function contact() {
    setViewer("Contact", `
    <p class="big"><b>Contact</b></p>
    <p>Email: <code>mayxz.thenetherlands@gmail.com</code></p>
    <p> | Benieuwd wat ik voor u kan betekenen? Stuur een e-mail met u vraag en
     ik zou zsm contact met u opnemen om samen te kijken wat ik voor u kan doen! |</p>


    <a 
  href="https://github.com/PandemoniumXr3"
  target="_blank"
  rel="noopener noreferrer"
>
  Mijn GitHub link :
</a>

<p>(link opend in een los tablad om te voorkomen dat u wordt doorgestuurd naar een onbekende link!)<p>
                                                         

<a 
  href="https://mikeramirezzz.myportfolio.com/welcome"
  target="_blank"
  rel="noopener noreferrer"
>




  Mijn Design portfolio site :
</a>

  `);
    print("Opened: contact");
}

function runCommand(raw) {
    const input = raw.trim();
    if (!input) return;

    print(`f@society@m00n:~$ ${input}`);

    const [cmd, ...args] = input.split(" ");

    switch (cmd.toLowerCase()) {
        case "help": help(); break;
        case "about": about(); break;
        case "projects": listProjects(); break;
        case "open": openProject((args[0] || "").toLowerCase()); break;
        case "contact": contact(); break;
        case "clear": termOut.textContent = ""; break;
        default:
            print(`Command not found: ${cmd}. Type "help".`);
    }
}

print("Booting M1K3-OS...");
print("Type 'help' to begin.");

termForm.addEventListener("submit", (e) => {
    e.preventDefault();
    runCommand(termIn.value);
    termIn.value = "";
});

window.addEventListener("click", () => termIn.focus());
