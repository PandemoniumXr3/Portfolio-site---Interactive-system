const termOut = document.getElementById("termOut");
const termForm = document.getElementById("termForm");
const termIn = document.getElementById("termIn");

const viewerTitle = document.getElementById("viewerTitle");
const viewerBody = document.getElementById("viewerBody");
const clockEl = document.getElementById("clock");

const state = {
    user: "mike",
    host: "mrrift",
    cwd: "~",
};

const projects = {
    app1: {
        title: "App 1: Budget tracker (in progress)",
        html: `
      <p class="big"><b>App 1</b> (Budget tracker)</p>
      <p>Here comes my design and concept: screenshot and short description.</p>
      <ul>
        <li>Rol: Webapplication, <b>Budget tracker</b></li>
        <li>Tools: Notion, Creative concept, Visual Studio Code for development</li>
        <li>Inspiraton: I had no overview of my monthly expenses and cost
        and wanted to create a financial overview app that didn't take me longer setting up than I got into the flow of using it</li>
        <li>Full concept and design + development is on my github! (linked in contact)</li>
      </ul>
      <p>LATER: zet je afbeelding in <code>assets/projects/app1.png</code>.</p>
    `
    },
    app2: {
        title: "App 2: Branding and Design of M4YXZ (in progress)",
        html: `
      <p class="big"><b>App 2</b></p>
      <p>Case: mike@mrrift style branding of webshop for dropshipping my own Designs on clothes.</p>
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
    print("  open <name>         open project");
    print("  clear               clear terminal");
    print("  contact             show contact");
    print("  whoami              show whoami");
}

function about() {
    setViewer("About", `
    <p class="big"><b>Mike Ramírez</b></p>
    <h3>Design | Coding | Hardware | Tech | Cybersecurity |</h3>
    <p>Welcome to Mike-OS.
    This portfolio is built as an interactive system instead of a traditional website.
    Use the terminal to explore projects, background and links.
    Type help to see available commands.</p>


    <h4> About Me </h4>
    
    <p>Hi, I’m Mike Ramirez.
    I’m an analytical and highly curious builder who is working towards becoming an ethical hacker / junior pentester in cybersecurity, with a strong interest in red teaming, security research, and understanding how systems really work beneath the surface.
    What drives me most is simple: curiosity.
    I naturally want to understand how things work, where systems break, and how they could be improved. That mindset is what led me toward cybersecurity, development and systems thinking.
    My background in design and creative thinking also gives me a different perspective than many technical profiles. I enjoy combining technical logic with creative problem solving, which often helps me approach problems from angles that others might not immediately see.
    I’m currently continuing my development at Script, where I’m able to learn and work in an environment focused on technology, experimentation and real-world problem solving. Being part of Script is something I’m genuinely happy about and proud of,
    because it represents exactly the type of environment where I grow the fastest.</p>


    <h4> How My Brain Works </h4>

    <p>I have ADHD and Autism, which means my brain processes information differently than most people.
    For me this is not a limitation. In many ways, it’s the opposite.
    My brain naturally focuses on:
    <ul>
        <li>patterns</li>
        <li>systems</li>
        <li>logic</li>
        <li>details that others often overlook</li>
        <li>connections between seemingly unrelated things</li>
        <li>creative solutions others wouldn't even think of</li>
        <li>hyperfocus for hours when I'm fascinated by something</li>
        <li>bringing energy and enthusiasm to a place or project</li>
    </ul>
    Logic feels like a first language to me. When I encounter a system, my instinct is to map how it works internally and how the structure fits together.
    Because of ADHD, my thinking speed can be very high when I’m engaged with something interesting. Combined with a strongly analytical mindset, this often results in deep focus and fast problem-solving once I’m inside a system.
    In the right environment, this combination becomes extremely powerful.
    It allows me to:
    <ul>
        <li>recognize patterns quickly</li>
        <li>see structural problems early</li>
        <li>think several steps ahead</li>
        <li>come up with creative technical solutions</li>
    </ul>
    </p>

    <h4> System Thinking</h4>

    <p>My brain tends to see the world as systems and idea's that can be improved.
    This doesn’t only apply to technology. It shows up everywhere.
    For example:
    <ul>
        <li>I automated smart plugs in my room so they repeatedly turn on and off in the morning as a signal that it’s time to go to the gym</li>
        <li>If I frequently lose an object, I redesign the system around it (for example attaching my lighter to a retractable cord so it can’t disappear anymore)</li>
        <li>I constantly build small systems or improvements for daily problems</li>
        <li>It may sound simple, but this mindset is exactly the same thinking that applies to security and hacking.</li>
        <li>If you understand systems deeply enough, you also start to understand and see where they can fail.</li>
        <li>I have found allot of mistakes in design structure or systems just in my daily life that annoys me often because in my perspective
        it would be so easy to improve but nobody seems to care or notice and that's exactly where mistakes in security often come from. </li>
    </ul>

    <h4> Learning Style </h4>

    <p> Traditional education hasn’t always matched the way my brain learns best.
    I learn fastest when I can:
    explore real systems
    experiment
    break things and rebuild them
    solve problems I don’t fully understand yet
    For example, in a previous ICT program the material planned for roughly three months of coursework was something I was able to work through in about two weeks, simply because once I understand the underlying logic and patterns, the rest becomes intuitive.
    I don’t learn best from repetitive exercises.
    I learn best from real challenges and building real things.
    That’s why environments like Script, where experimentation and practical learning are central, fit me much better
    </p>


    <h4> What I’m Interested In </h4>

    <p> My core interest is cybersecurity and ethical hacking, but my curiosity naturally spreads across multiple areas of technology.
    These include:
    <ul>
        <li>Cybersecurity / ethical hacking</li>
        <li>Red teaming and offensive security</li>
        <li>Software development</li>
        <li>Systems and infrastructure</li>
        <li>Hardware and low-level systems</li>
    </ul>
    <p>Automation and system design
    I enjoy understanding how software, hardware and networks interact, because the deeper you understand a system as a whole, the better you can break or secure or even build it.
    </p>


    <h4> Building and Ideas </h4>

    <p>Besides learning and studying technology, I constantly work on concepts, systems and ideas.
    This includes things like:
    <ul>
        <li>small technical experiments</li>
        <li>automation systems</li>
        <li>app concepts that solve real problems</li>
        <li>new technical ideas that combine logic and design</li>
    </ul>
    I’m also developing my own brand M4YXZ, where technology, creativity and personal background and experiences comes together.
    </p>


    <h4> Personality </h4>

    <p>Beyond the technical side, people often describe me as:
    <ul>
        <li>curious</li>
        <li>analytical</li>
        <li>creative</li>
        <li>energetic</li>
        <li>communicative</li>
        <li>system-oriented</li>
    </ul>
    I enjoy exploring ideas, solving complex problems and thinking about how things could work better.
    I also care a lot about authenticity and honesty, which is why I prefer being transparent about how I think and work rather than trying to fit into a standard template.
    </p>


    <h4> The Goal </h4>

    <p>My goal is to work in an environment where curiosity, experimentation and deep thinking are encouraged.
    Whether that’s in cybersecurity, ethical hacking, software development or systems engineering, I want to keep learning, building and understanding systems at a deeper level.
    Because for me, technology isn’t just a profession.
    It’s a puzzle that never stops being interesting.
    </p>


    <p> <b>Mike Ramírez</b> </p>


  `);
    print("Opened: about");
}

function listProjects() {
    const names = Object.keys(projects);
    print("projects:");
    names.forEach(n => print(`  ${n}  - ${projects[n].title}`));
    setViewer("Projects", `
    <p class="big"><b>Projects</b></p>
    <p><code>open app1</code> of <code>open app2</code>.</p>
    <p>My Github is linked in "contact" .</p>
    <p>Type: <code>open webapp 1</code>, <code>open brand1</code>, etc.</p>
    <p>(Note: these are just concepts and placeholders for now, but I'm working on building out real projects to showcase.
    On my Github already are a few experiments!) </p>
  `);
}

function openProject(name) {
    const p = projects[name];
    if (!p) {
        print(`Error: project "${name}" not found. Try: about`);
        return;
    }
    setViewer(p.title, p.html);
    print(`Opened: ${name}`);
}
function whoami() {
    setViewer("Whoami", `
      <p class="big"><b>whoami</b></p>
      <p>Mike Justin Lùca-Sem Ramírez —</p> <br> <p> Creative Concept Designer / Web(app)-Dev / Ethical Hacker / LOADING.......</p>
    `);
    print("Opened: whoami");
}

function contact() {
    setViewer("Contact", `
    <p class="big"><b>Contact</b></p>
    <p>Email: <code>mayxz.thenetherlands@gmail.com</code></p>
    <p> Contact
    If you’d like to connect, collaborate, or discuss ideas, feel free to reach out.
    </p>

    <p><a href="https://github.com/PandemoniumXr3" target="_blank" rel="noopener noreferrer">My GitHub link</a></p>

    <p>(link will open in a new tab to prevent you from being redirected to an unknown link!)</p>

    <p><a href="https://mikeramirezzz.myportfolio.com/welcome" target="_blank" rel="noopener noreferrer">My Design portfolio site (not up to date)</a></p>
  `);
    print("Opened: contact");
}


function runCommand(raw) {
    const input = raw.trim();
    if (!input) return;

    print(`mike@mrrift:~$ ${input}`);

    const [cmd, ...args] = input.split(" ");

    switch (cmd.toLowerCase()) {
        case "help": help(); break;
        case "about": about(); break;
        case "projects": listProjects(); break;
        case "open": openProject((args[0] || "").toLowerCase()); break;
        case "contact": contact(); break;
        case "whoami": whoami(); break;
        case "clear": termOut.textContent = ""; break;
        default:
            print(`Command not found: ${cmd}. Type "help".`);
    }
}

print("Booting M1K3-OS...");


termForm.addEventListener("submit", (e) => {
    e.preventDefault();
    runCommand(termIn.value);
    termIn.value = "";
});

window.addEventListener("click", () => termIn.focus());
