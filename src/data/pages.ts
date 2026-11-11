/**
 * All long-form page copy.
 *
 * Paragraphs may contain inline links written as `[anchor](/path)`. They are
 * resolved against the deployment base path at render time by
 * `src/lib/inline.ts`, so never hard-code the repository name here.
 */

export type SchemaKind = 'HowTo' | 'Article' | 'WebPage';

export interface Section {
  id: string;
  heading: string;
  /** Plain paragraphs, may include `[anchor](/path)` links. */
  body?: string[];
  bullets?: string[];
  steps?: { title: string; text: string }[];
  table?: { caption?: string; head: string[]; rows: string[][] };
}

export interface Faq {
  question: string;
  answer: string;
}

export interface PageContent {
  slug: string;
  /** <title> and og:title */
  title: string;
  /** <h1> */
  heading: string;
  description: string;
  /** Short lead paragraph under the h1. */
  intro: string;
  updated: string;
  schema: SchemaKind;
  sections: Section[];
  faqs?: Faq[];
  related?: string[];
}

export interface HomeContent {
  title: string;
  heading: string;
  description: string;
  intro: string;
  aboutHeading: string;
  about: string[];
  featuresHeading: string;
  features: { title: string; text: string; icon: string }[];
  stepsHeading: string;
  steps: { title: string; text: string }[];
  controlsHeading: string;
  controlsNote: string;
  faqs: Faq[];
}

const UPDATED = '2026-11-11';

const CONTROLS_ROWS: string[][] = [
  ['The big round button', 'Hold it to charge the launch, let go to drop'],
  ['The same button mid-run', 'It becomes the jump button — tap it to hop'],
  ['Pause icon (top right)', 'Freeze the run and open the level menu'],
  ['Restart icon (top right)', 'Reset the level and keep your coins'],
  ['Left-hand column', 'Shop: vehicles and props, priced in coins'],
  ['УРОВНИ (bottom left)', 'Level select — fifteen levels in total'],
  ['ОБЪЕКТЫ (bottom centre)', 'Your object collection — the gear you place in a level'],
  ['ПОЗА 1 / 2 / 3 (bottom right)', 'Starting poses for the ragdoll'],
  ['Mouse or finger', 'Everything is on screen; nothing to memorise'],
];

export const home: Record<'en', HomeContent> = {
  en: {
    title: 'Ragdoll Drop Online — Play the Free Physics Game in Your Browser',
    heading: 'Ragdoll Drop, playable in your browser',
    description:
      'Play Ragdoll Drop online for free — a physics arcade game where you launch a floppy ragdoll down 15 trap-filled levels, chain bone-breaking impacts and spend the coins on crazier vehicles. No download, no login.',
    intro:
      'One floppy body, a level full of stairs, spikes, rockets and trampolines, and a single question: how much damage can you do on the way down? Ragdoll Drop turns gravity into a scoreboard, and the score only goes up when something breaks.',
    aboutHeading: 'What Ragdoll Drop actually is',
    about: [
      'Ragdoll Drop is a physics arcade game by Ericetto, the studio behind Ragdoll Hit and Ragdoll Archers. You do not control a character so much as release one: pick a vehicle, charge a launch, and let a jointed body tumble through fifteen hand-built levels that are basically obstacle courses designed to hurt.',
      'The scoring is the interesting part. Distance is worth something, but impacts are worth more, and the game rewards a fall that clips the same barrel three times over one that lands cleanly at the bottom. That is why the good runs look less like platforming and more like billiards — you are lining up a chain reaction.',
      'Between runs you spend what you earned. Coins buy vehicles (skateboard, scooter, swivel chair, shopping cart, bed, bathtub), props you can plant in the level, and permanent upgrades to the ragdoll itself. It runs on Unity WebGL, so there is nothing to install: the whole thing streams into the player above and boots in a few seconds.',
    ],
    featuresHeading: 'Why it is worth a coffee break',
    features: [
      {
        title: 'Fifteen levels, one bad idea each',
        text: 'Ladder, Slope, Rockets, Train, Workshop and more — every stage is a different way to fall further and hit harder.',
        icon: 'stairs',
      },
      {
        title: 'Physics you can feel',
        text: 'Limbs move independently, so the same launch twice gives two different wrecks. Nothing is scripted.',
        icon: 'paw',
      },
      {
        title: 'Damage is the score',
        text: 'Impact force, distance and total damage decide your payout. Three small bumps pay less than one perfect chain.',
        icon: 'coin',
      },
      {
        title: 'Ride instead of run',
        text: 'Skateboards, office chairs, shopping carts, beds, bathtubs. Each vehicle changes balance, speed and how badly the landing goes.',
        icon: 'cart',
      },
      {
        title: 'Build the machine',
        text: 'Drop trampolines, blades, TNT and speed pads into a level and chain them into one long, profitable accident.',
        icon: 'box',
      },
      {
        title: 'No download, no account',
        text: 'The full 3D game loads in the page. Hold to launch on a phone or a desktop, no install and nothing to sign up for.',
        icon: 'mobile',
      },
    ],
    stepsHeading: 'Your first five minutes',
    steps: [
      {
        title: 'Hold the round button, then let go',
        text: 'The big button on the right charges the launch while you hold it. Release it and the ragdoll is on its way — no aim required.',
      },
      {
        title: 'Read the level before you spend the launch',
        text: 'Look at where the stairs go. A drop that starts on a slope keeps rolling; one that starts on a flat ledge stops dead and scores almost nothing.',
      },
      {
        title: 'Tap jump at the edge',
        text: 'Once you are moving, the button turns into the jump. Tap it just before a ledge to leave the platform with extra height, which is worth far more than the speed you lose.',
      },
      {
        title: 'Watch the score, not the body',
        text: 'The number at the top is the run. If it stops climbing, the fall is over in every way that matters — restart instead of waiting for the ragdoll to settle.',
      },
      {
        title: 'Spend the coins on a vehicle',
        text: 'The left-hand column is the shop. A shopping cart rolls on its own and turns a straight fall into a long one, which is the cheapest way to double a beginner run.',
      },
    ],
    controlsHeading: 'Controls at a glance',
    controlsNote:
      'Every action in the build is a click or a tap on the screen, so there are no keys to memorise. The full walkthrough, including the shop column and the pause menu, is on the',
    faqs: [
      {
        question: 'Is Ragdoll Drop free to play here?',
        answer:
          'Yes. The game is free, needs no account and no download — it streams into the player on this page and stores your coins and upgrades in your own browser.',
      },
      {
        question: 'Is this the real game or a copy?',
        answer:
          'It is the original build, made by Ericetto and hosted on a public CDN mirror of the release. This site is an unofficial fan page that embeds it and writes guides; it does not host or modify the game files.',
      },
      {
        question: 'Can I play it on a phone?',
        answer:
          'Yes. The game is built for touch as much as for a mouse: hold the round button to charge, release to drop, tap it again to jump. Landscape is more comfortable because the shop column takes up screen space.',
      },
      {
        question: 'Why is some of the in-game text in Russian?',
        answer:
          'The build that is publicly embeddable is the developer’s original release, and its interface was shipped in Russian. The layout is icon-driven — coins, bones, arrows, a big round play button — so the game is easy to follow anyway, and every label is translated in our controls guide.',
      },
      {
        question: 'How is the score calculated?',
        answer:
          'From impact force, distance travelled and total damage, with a multiplier for chain reactions. Coins are paid out at the end of the run and are what you spend on vehicles, props and ragdoll upgrades.',
      },
      {
        question: 'Is this the same as Ragdoll Drop Tycoon?',
        answer:
          'No. Ragdoll Drop Tycoon is a separate incremental clicker by Tic Tap Studios. The game on this page is the physics arcade by Ericetto, the one with the vehicles, the fifteen levels and the trap building.',
      },
      {
        question: 'Is it violent?',
        answer:
          'It is cartoon slapstick, not gore: bones crack, limbs bend the wrong way and the ragdoll is a featureless yellow figure that never really gets hurt. The official listing sits around 10+.',
      },
    ],
  },
};

export const pages: Record<'en', PageContent[]> = {
  en: [
    {
      slug: 'how-to-play',
      title: 'How to Play Ragdoll Drop — Objective, Scoring and Your First Level',
      heading: 'How to Play Ragdoll Drop',
      description:
        'A beginner’s guide to Ragdoll Drop: how the launch works, how damage turns into score, what the shop column sells and the fastest way to a run worth repeating.',
      intro:
        'The game explains itself in about twenty seconds, but the scoring underneath is not obvious. This is the short version: charge a launch, keep the ragdoll in contact with as many hazards as possible, and spend the coins before you try again.',
      updated: UPDATED,
      schema: 'HowTo',
      sections: [
        {
          id: 'objective',
          heading: 'The objective, stated plainly',
          body: [
            'Each level gives you a ragdoll on a vehicle and a route down. Your job is to make that route as violent and as long as possible. There is no finish line to cross and no enemy to defeat — the run ends when the ragdoll stops moving, and it is scored on what it hit on the way.',
            'Everything else in the game exists to serve that loop. Coins buy vehicles that fall differently, props that add more collisions and upgrades that make each collision count for more.',
          ],
        },
        {
          id: 'launch',
          heading: 'How the launch actually works',
          body: [
            'The big round button on the right is the only control you need. Press and hold it: the button charges, and when you let go the ragdoll is released with force proportional to how long you held it. A tap gives you a barely-moving flop; a long hold gives you a launch.',
            'Mid-run the same button changes to the jump, in a different colour. Tapping it bounces the ragdoll upward, which is the main way to extend a fall — hitting a ledge and stopping is the most common way a good run dies.',
          ],
        },
        {
          id: 'scoring',
          heading: 'How the score is calculated',
          body: [
            'Three things are being counted at once: how hard the impacts were, how far the body travelled, and how much damage the run accumulated. A long, gentle slide scores poorly; a short, brutal tumble through a stairwell scores well.',
            'Chain reactions are the multiplier. If one collision knocks the ragdoll into a second hazard and then a third, the game keeps rolling the same hit into a bigger number, which is why a good trap setup is worth more than a good launch.',
          ],
          bullets: [
            'Hitting the same prop repeatedly still counts — stairs are the cheapest scoring in the game.',
            'Stopping dead on a flat surface ends the chain; the payout is whatever you already banked.',
            'The number at the top centre is the live score, with your best run for that level underneath it.',
            'Coins are paid at the end, and they are the only thing that carries between runs.',
          ],
        },
        {
          id: 'shop',
          heading: 'The shop column, and what to buy first',
          body: [
            'The stack of cards down the left side is the shop. Each one is a vehicle or a prop with a coin price on it, and the two slots at the top left are what you are currently taking into the level.',
            'Buy the shopping cart before anything else. It rolls, it is unstable, and it turns a level that ends at the first step into a level that keeps going. After that, the swivel chair is the funniest upgrade and the bed is the most forgiving if you are still learning how the launch timing feels.',
          ],
        },
        {
          id: 'upgrades',
          heading: 'Upgrades: what actually gets better',
          body: [
            'Coins also buy permanent changes to the ragdoll rather than to the level. Bone density makes the body survive bigger hits instead of folding, impact force raises the number each collision is worth, and air control lets you nudge the fall while it is happening.',
            'Of the three, impact force is the one you feel first, because it multiplies every run instead of only the ones where you survive longer. Air control is the one that raises your ceiling, and it is worth buying once you know the levels.',
          ],
        },
        {
          id: 'first-run',
          heading: 'A clean first run, step by step',
          steps: [
            {
              title: 'Start on the first level and look at it',
              text: 'Do not hold the button yet. Find the stairs, find where they end, and notice which side of the level has more to hit.',
            },
            {
              title: 'Charge about halfway and release',
              text: 'A mid-strength launch is easier to read than a maximum one. You want to see which way the body travels before you start optimising.',
            },
            {
              title: 'Jump at the first ledge',
              text: 'The moment the ragdoll reaches an edge, tap the button. That single input is usually worth more than any launch strength.',
            },
            {
              title: 'Let the tumble finish, then note the score',
              text: 'The payout tells you whether the route was right. If the number stalled halfway, the ragdoll got stuck, not unlucky.',
            },
            {
              title: 'Restart instead of waiting',
              text: 'The circular arrow at the top right resets instantly. Do not sit through a settled ragdoll — a stalled run is a finished run.',
            },
            {
              title: 'Buy the shopping cart, then repeat the level',
              text: 'Same level, new vehicle. Feeling the difference between a skateboard and a cart is the fastest lesson the game offers.',
            },
          ],
        },
        {
          id: 'mistakes',
          heading: 'Five mistakes that end runs early',
          bullets: [
            'Releasing the launch on a flat platform — the ragdoll flops once and stops.',
            'Never touching the jump button; half the levels are only interesting after one good hop.',
            'Buying props before a vehicle; the vehicle changes every run, a prop changes one level.',
            'Restarting too late, after the ragdoll has settled into a corner with nothing left to hit.',
            'Ignoring the level list at the bottom left and replaying a level you have already solved.',
          ],
        },
      ],
      faqs: [
        {
          question: 'How long is a run?',
          answer:
            'Seconds, usually. A good fall is ten to twenty seconds of contact, then the payout. The whole appeal is that you can retry immediately, so a session is dozens of short runs rather than one long one.',
        },
        {
          question: 'Do I lose coins when I restart?',
          answer:
            'No. Coins and upgrades sit in your browser’s local storage, so restarting a level only resets the level — it never costs you a purchase.',
        },
        {
          question: 'Is there an ending?',
          answer:
            'There are fifteen levels and a set of missions that run alongside them. Beating a level unlocks the next one; the missions are how you pay for the expensive vehicles without grinding the first stage.',
        },
        {
          question: 'Can I place my own props?',
          answer:
            'Yes — the object collection in the bottom bar is yours to use, and placing a trampoline or a blade in the fall path is how experienced runs get their multipliers.',
        },
      ],
      related: ['controls', 'tips', 'unblocked'],
    },

    {
      slug: 'controls',
      title: 'Ragdoll Drop Controls — Launch, Jump, Shop and Pause Buttons',
      heading: 'Ragdoll Drop Controls',
      description:
        'Every control in Ragdoll Drop explained, plus a translation of the on-screen labels: the launch button, the jump, the shop column, the pause and restart icons.',
      intro:
        'There is one button, and it does two things: it launches, and then it jumps. Everything else on screen is a menu. This page maps the whole interface, including the Russian labels the build ships with.',
      updated: UPDATED,
      schema: 'Article',
      sections: [
        {
          id: 'launch',
          heading: 'The launch button',
          body: [
            'The large circle on the right is the only input that matters during a run. Hold it down and it charges; the longer you hold, the more force the ragdoll leaves with. Let go and the run begins.',
            'The hint beside it reads НАЖМИ И ДЕРЖИ, which is simply “press and hold”. The label inside the button is СТАРТ — “start”.',
          ],
        },
        {
          id: 'jump',
          heading: 'The jump',
          body: [
            'The instant the ragdoll starts moving, the same circle changes colour and its label becomes ПРЫГ, “jump”. Tapping it there bounces the ragdoll upward. It is the only mid-air influence you have without upgrades.',
            'Timing beats spam. A jump taken a fraction before the edge carries the body off the platform with height; a jump taken at the bottom of the stairs usually just stops the tumble.',
          ],
        },
        {
          id: 'screen',
          heading: 'What every part of the screen is',
          table: {
            caption: 'Labels are shown as they appear in the build, with a translation.',
            head: ['On screen', 'What it does'],
            rows: CONTROLS_ROWS,
          },
        },
        {
          id: 'hud',
          heading: 'The HUD, in one paragraph',
          body: [
            'Top centre is СЧЕТ — your score for this run — with РЕКОРД, your record for the level, underneath it. Top left are your coins and your two equipped items; the slots beside them are the vehicle and the prop you are taking in. The card under the coins is the level mission, for example “break ten bones” (СЛОМАЙ 10 КОСТЕЙ), and it pays a bonus when you hit it.',
            'Top right holds two square buttons: pause, and restart. The pause button opens the level menu; the circular arrow resets instantly and keeps your coins.',
          ],
        },
        {
          id: 'shop',
          heading: 'Using the shop',
          body: [
            'The column of cards on the left is everything you own or can buy, each with a price in coins. Cards you cannot afford are greyed out with the price still visible, which is useful: it tells you how far you are from the shopping cart.',
            'The two framed slots at the top of the column are your loadout. Selecting a card fills one of them, and what is in those slots is what the level gives you. If a purchase does not seem to have changed anything, check the slots — you probably bought it without equipping it.',
          ],
        },
        {
          id: 'mobile',
          heading: 'Touch controls',
          body: [
            'There is nothing to relearn on a phone: the on-screen buttons are the controls, so a tap and a hold behave exactly as they do with a mouse. The only difference is that a finger covers more of the screen, which makes the shop column cramped.',
            'Landscape is strongly recommended. In portrait the level list and the shop push the play area into a narrow strip, and the drop becomes hard to read.',
          ],
          bullets: [
            'Hold the round button to charge, lift your finger to launch.',
            'Tap the same button mid-run to jump.',
            'Tap a shop card to equip it; the price shows under the icon.',
            'Use the pause button before switching tabs, or the run resumes without you.',
          ],
        },
        {
          id: 'troubleshooting',
          heading: 'When the controls stop responding',
          bullets: [
            'Click once inside the game frame — keyboard and pointer events only reach a focused iframe.',
            'If the button is grey and will not charge, the level is paused: hit the pause button again.',
            'If the ragdoll will not move at all, the run is over; restart with the circular arrow.',
            'On a laptop with a touchscreen, resting a palm on the screen can switch the build into touch mode mid-run.',
            'If nothing works, open the game in its own tab — some browser extensions block input inside embedded frames.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Do I need a keyboard?',
          answer:
            'No. Every action in the build is a button on the screen — launch, jump, pause, restart, shop — so a mouse or a finger is enough.',
        },
        {
          question: 'What does ПРЫГ mean?',
          answer:
            '“Jump”. It is the label the round button switches to once the ragdoll is moving. СТАРТ, the label before that, means “start”.',
        },
        {
          question: 'Why does the button sometimes do nothing?',
          answer:
            'Either the run has already ended, or the game does not have focus. Click once inside the player, then hold the button again.',
        },
        {
          question: 'Does it work with a trackpad?',
          answer:
            'It runs, and because the game uses a single hold-and-release input rather than aiming, a trackpad is not a disadvantage here the way it is in a shooter.',
        },
      ],
      related: ['how-to-play', 'tips', 'unblocked'],
    },

    {
      slug: 'tips',
      title: 'Ragdoll Drop Tips — Chain Reactions, Vehicle Choice and Scoring',
      heading: 'Ragdoll Drop Tips and Tricks',
      description:
        'Practical Ragdoll Drop strategy: how to read a level, build chain reactions, choose a vehicle, time the jump and get more coins out of every run.',
      intro:
        'Once you can launch and jump, the game stops being about reflexes and becomes about route planning: which hazards are worth hitting, in what order, and with what under the ragdoll. These are the habits that raise a score.',
      updated: UPDATED,
      schema: 'Article',
      sections: [
        {
          id: 'read',
          heading: 'Read the level before you hold the button',
          body: [
            'Every level is a slope with furniture on it. Before launching, trace the line the ragdoll will take: where it first touches down, whether that surface is flat or angled, and where it will be spat out. A launch that lands on a flat ledge is a wasted run, no matter how hard you charged it.',
            'The single most useful thing to find is a long staircase. Stairs are a guaranteed run of small collisions, and small collisions are what a chain multiplier is made of.',
          ],
        },
        {
          id: 'chain',
          heading: 'Build one chain, not five hits',
          body: [
            'The score rewards a run that keeps going more than a run that hits hard and stops. That means the goal is contact, not force: a fall that bounces between two walls and a staircase will beat a single enormous impact every time.',
            'Props are how you engineer that contact. A trampoline under a staircase keeps the body in the level instead of letting it slide out; a speed pad before a corner turns a glancing hit into a full one.',
          ],
          bullets: [
            'Aim for the thickest part of the layout, not the biggest single object.',
            'Bounce pads and trampolines are worth more than blades on most levels, because they add collisions rather than ending them.',
            'If the body is drifting towards an empty edge, jump — a change of direction is usually worth more than the height you lose.',
          ],
        },
        {
          id: 'vehicles',
          heading: 'Pick the vehicle for the level, not for the joke',
          body: [
            'Vehicles are not cosmetic. The skateboard is fast and fragile, the shopping cart rolls and is almost impossible to stop, the office chair spins, the bed is heavy and absorbs the first hit, and the bathtub is a sled.',
            'The practical rule: long stair levels want something that rolls, cramped levels with a single big drop want something heavy that will not bounce away, and levels with a lot of flat ground want something fast enough to reach the interesting part before it settles.',
          ],
        },
        {
          id: 'jump',
          heading: 'The jump is a scoring tool',
          body: [
            'Most players use the jump to survive. It is better used to steer. A jump taken at the edge of a platform sends the ragdoll further into the level; a jump taken in mid-air after a big hit keeps the body from landing in the one dead corner the level has.',
            'The mistake is holding the jump for when things look dangerous. By then the ragdoll is already in a spot with nothing left to hit.',
          ],
        },
        {
          id: 'economy',
          heading: 'How to stop grinding',
          body: [
            'Coins come from finishes, and the missions in the top-left card pay the most for the least work. Read the mission before you launch: if it asks for ten bones on level three, do it there rather than trying to force it on the level you happen to like.',
            'Buy in this order: one rolling vehicle, then impact force, then the props you keep reaching for, then air control. Buying every vehicle before any upgrade is the classic way to stay stuck.',
          ],
        },
        {
          id: 'advanced',
          heading: 'Small things that add up',
          bullets: [
            'Restart the moment the score stops climbing; a settled ragdoll never starts again.',
            'Replay a level you have already beaten instead of pushing into the next one with the wrong vehicle.',
            'Place props where the ragdoll will meet them at speed, not where they look tidy.',
            'Look for hidden chests while you tumble — the skins inside are free cosmetics.',
            'Chain the multiplier before spending coins on cosmetics; the cosmetics do not score.',
          ],
        },
      ],
      faqs: [
        {
          question: 'What is the best first purchase?',
          answer:
            'The shopping cart. It rolls, it is cheap compared with the later vehicles, and it turns almost any level into a longer fall.',
        },
        {
          question: 'Should I upgrade or buy vehicles first?',
          answer:
            'One vehicle, then upgrades. Vehicles change how a single level plays; impact force and bone density change every run you will ever do.',
        },
        {
          question: 'Do props carry between levels?',
          answer:
            'Props live in your collection and are placed per level, so the ones you buy stay available. What changes between levels is where they are useful.',
        },
        {
          question: 'Is there a way to practise without spending coins?',
          answer:
            'Every restart is free and coins are only spent in the shop, so you can experiment with a level as long as you like without losing progress.',
        },
      ],
      related: ['how-to-play', 'controls', 'unblocked'],
    },

    {
      slug: 'unblocked',
      title: 'Ragdoll Drop Unblocked — Play at School or Work, and Fix a Black Screen',
      heading: 'Ragdoll Drop Unblocked',
      description:
        'Why Ragdoll Drop runs on most school and work networks, what the browser needs, and how to fix a game that will not load or a player stuck on a black screen.',
      intro:
        'The game is a single embedded canvas rather than a downloaded app, which is why it usually works where app stores and executable downloads do not. Here is what it needs, and what to try when the player stays black.',
      updated: UPDATED,
      schema: 'Article',
      sections: [
        {
          id: 'why',
          heading: 'Why it usually works on a restricted network',
          body: [
            'Nothing is installed and no account is created. The page is plain HTML on GitHub Pages, and the game is a WebGL scene fetched over HTTPS from a public CDN. Filters that block executables, installers or the app stores have nothing to catch.',
            'That said, a network that blocks game categories wholesale will block this one too. If in doubt, load the page and watch the player: if the ragdoll appears, the network let the game through.',
          ],
        },
        {
          id: 'requirements',
          heading: 'What the browser needs',
          bullets: [
            'WebGL 2 — every current version of Chrome, Edge, Firefox and Safari has it.',
            'JavaScript enabled, and no extension blocking the embedded frame.',
            'A few seconds on the first load while the 3D scene streams in; after that it comes from the browser cache.',
            'A pointer or a touchscreen, since the whole game is one hold-and-release button.',
          ],
        },
        {
          id: 'black-screen',
          heading: 'Fixing a black screen or an endless loader',
          steps: [
            {
              title: 'Give it ten seconds',
              text: 'The player fetches a 3D scene before it draws anything. A cold cache on shared Wi-Fi is slower than you expect.',
            },
            {
              title: 'Reload the frame, not just the page',
              text: 'Use the reload button under the player, or open the game in its own tab. A half-finished download can wedge the loader.',
            },
            {
              title: 'Turn off the ad blocker for this page',
              text: 'Strict blockers occasionally stop the player’s own frame from initialising, even though this build carries no advertising of its own.',
            },
            {
              title: 'Try a different browser',
              text: 'If Safari shows a blank canvas, Chrome or Edge on the same machine usually works — hardware acceleration is the usual culprit.',
            },
            {
              title: 'Check that WebGL 2 is on',
              text: 'Open chrome://gpu and look for “WebGL2: Hardware accelerated”. If it says disabled, the browser is the problem, not the site.',
            },
          ],
        },
        {
          id: 'focus',
          heading: 'If the button does nothing inside the player',
          body: [
            'Click once inside the game area. Browsers send pointer input only to a focused frame, so a freshly loaded player ignores the launch button until you click it. If a browser extension auto-pauses embedded content, opening the game in a new tab is the quickest workaround.',
          ],
        },
        {
          id: 'alternatives',
          heading: 'If the embed is blocked entirely',
          body: [
            'Some networks block the CDN host rather than the page. In that case the game will not stream here or anywhere else — the honest answer is that you need a different network. The official listing is another route in, but it pulls the same build.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Is it really unblocked at school?',
          answer:
            'On networks that filter by app store or file type, yes, because nothing is installed. On networks that block gaming domains by category, it will be blocked like anything else.',
        },
        {
          question: 'Does it need an account?',
          answer:
            'No. There is no sign-in, no email and no profile — the game starts from the player, and your coins are stored in the browser.',
        },
        {
          question: 'Will it run on a Chromebook?',
          answer:
            'Yes. A Chromebook with WebGL 2 runs the build fine, and there is no keyboard layout to learn because the controls are on screen.',
        },
        {
          question: 'Does my progress survive clearing the cache?',
          answer:
            'No. Coins and upgrades live in the browser’s local storage, so clearing site data resets them. That is also why the game works without an account.',
        },
      ],
      related: ['how-to-play', 'controls', 'tips'],
    },

    {
      slug: 'about',
      title: 'About Ragdoll Drop Online — Who Makes the Game and This Site',
      heading: 'About this site',
      description:
        'Who develops Ragdoll Drop, how this fan page relates to the official release, what it hosts and what it deliberately does not.',
      intro:
        'Ragdoll Drop Online is an unofficial fan page: a fast wrapper around a public build of the game, plus written guides for the parts of it that are not explained anywhere.',
      updated: UPDATED,
      schema: 'Article',
      sections: [
        {
          id: 'game',
          heading: 'The game',
          body: [
            'Ragdoll Drop is developed by Ericetto, an indie studio known for Ragdoll Hit and Ragdoll Archers. It is a physics arcade game: you launch a jointed ragdoll down fifteen levels, score from the impacts, and spend the coins on vehicles, props and upgrades.',
            'The web version is a Unity WebGL build. It is free to play and keeps your progress in browser storage, so there is no account anywhere in the loop.',
          ],
        },
        {
          id: 'site',
          heading: 'What this site is',
          bullets: [
            'A single page that loads the game in a player, with a fullscreen button.',
            'Written guides to the launch, the scoring, the shop and the levels.',
            'No account system, no newsletter, no analytics script, no cookies of its own.',
            'Not affiliated with Ericetto, and not endorsed by them.',
          ],
        },
        {
          id: 'hosting',
          heading: 'Why the game is streamed rather than hosted here',
          body: [
            'The build is a large 3D bundle that the studio updates. Serving a copy from this repository would mean shipping a stale binary and redistributing someone else’s game files, so the player embeds a public CDN copy of the original release instead.',
            'The trade-off is that the game needs a working connection to that CDN — there is no offline mode, here or on the official listing.',
          ],
        },
        {
          id: 'language',
          heading: 'A note on the interface language',
          body: [
            'The publicly embeddable build is the developer’s original release, and its menus were shipped in Russian. The game itself is entirely playable without reading them — the controls are one round button, and the numbers are coins and score — but it is fair to say so up front.',
            'Our [controls guide](/controls/) translates every label that appears on screen, so nothing on the interface is a mystery even if the language is not yours.',
          ],
        },
        {
          id: 'contact',
          heading: 'Corrections and takedown requests',
          body: [
            'If you are the rights holder and would like the embed removed, open an issue on the repository linked in the footer and it will be taken down. The same channel is the right place for factual corrections: if a control changed or a level was patched, say so and the page will be updated.',
          ],
        },
      ],
      related: ['how-to-play', 'unblocked'],
    },

    {
      slug: 'privacy',
      title: 'Privacy Policy — Ragdoll Drop Online',
      heading: 'Privacy Policy',
      description:
        'What this site stores (very little), what the embedded game player collects, and how to opt out of the third-party parts.',
      intro:
        'This page is a static site with no backend. It sets no cookies of its own and runs no analytics. The game player inside it, however, is third-party software — that is the part worth reading about.',
      updated: UPDATED,
      schema: 'WebPage',
      sections: [
        {
          id: 'this-site',
          heading: 'What this site collects',
          bullets: [
            'No cookies, no fingerprinting scripts, no analytics, no advertising of our own.',
            'No accounts, so no personal details are ever requested.',
            'GitHub Pages, which serves these files, logs standard request data such as IP address and user agent for operational and security purposes.',
            'Your browser may cache the page and the game bundle locally; that copy never leaves your device.',
          ],
        },
        {
          id: 'game',
          heading: 'The embedded game player',
          body: [
            'The game is served from a third-party CDN and loads directly into a frame on this page. Once it starts, it behaves like any third-party site: it can use its own local storage, and in this build that is exactly what it does — your coins, upgrades and unlocked levels are stored in your browser, not on a server.',
            'We do not receive, see or store any of that data. What the player records is governed by the CDN operator’s and the studio’s own policies.',
          ],
        },
        {
          id: 'third-parties',
          heading: 'Third parties you may be sent to',
          bullets: [
            'Ericetto — the studio that develops the game.',
            'Poki — the official listing, linked from the footer and the player.',
            'The CDN that serves the game build into the player.',
            'GitHub — the host serving this site and its repository.',
          ],
        },
        {
          id: 'children',
          heading: 'Children',
          body: [
            'The game is cartoon slapstick and listed around 10+. This site does not knowingly collect information from anyone, of any age — there is no form to fill in — and the player itself asks for nothing.',
          ],
        },
        {
          id: 'changes',
          heading: 'Changes',
          body: [
            'If this site ever adds analytics, accounts or its own ads, this page will say so before the change goes live, and the update date at the top will move.',
          ],
        },
      ],
      related: ['terms', 'about'],
    },

    {
      slug: 'terms',
      title: 'Terms of Use — Ragdoll Drop Online',
      heading: 'Terms of Use',
      description:
        'The short terms for using this fan site: no warranty, the game belongs to its studio, and the guides are provided as-is.',
      intro:
        'Short version: this is an unofficial fan page, the game is somebody else’s property, and nothing here comes with a guarantee. The longer version is below.',
      updated: UPDATED,
      schema: 'WebPage',
      sections: [
        {
          id: 'unofficial',
          heading: 'An unofficial fan site',
          body: [
            'Ragdoll Drop Online is not affiliated with, endorsed by or operated by Ericetto. All trademarks, game code, artwork and audio belong to their respective owners. The name is used descriptively, to say what the page is about.',
          ],
        },
        {
          id: 'use',
          heading: 'Acceptable use',
          bullets: [
            'Play the game, read the guides, link to the pages — that is what the site is for.',
            'Do not present the guides as official documentation from the studio.',
            'Do not attempt to break, scrape or overload the player or the CDN it streams from.',
            'Do not reuse the site’s own text and design wholesale without asking.',
          ],
        },
        {
          id: 'availability',
          heading: 'Availability and warranty',
          body: [
            'The site is provided as-is, with no warranty of any kind. The game depends on a third-party CDN; if that host changes its URLs or goes down, the player here stops working and this page will be updated when it is noticed — not before.',
            'The guides describe the build as it behaves at the date shown on each page. Patches can change levels or controls, and the copy may lag behind them.',
          ],
        },
        {
          id: 'liability',
          heading: 'Limitation of liability',
          body: [
            'To the extent permitted by law, this site is not liable for any loss arising from its use, including lost coins or upgrades, since that progress is stored in your own browser and not on this site.',
          ],
        },
      ],
      related: ['privacy', 'about'],
    },
  ],
};

export const PAGE_SLUGS = ['how-to-play', 'controls', 'tips', 'unblocked', 'about'] as const;

export function getPage(lang: 'en', slug: string): PageContent | undefined {
  return pages[lang].find((page) => page.slug === slug);
}
