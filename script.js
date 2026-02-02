// Simple data: you can replace these with your own prompts later.

const truthCards = [
  "What is one thing you secretly wish I would do more often?",
  "What is a fantasy involving us that you think about more than once?",
  "What is one bold thing you would love us to try together at least once?",
  "What is something you’ve wanted to try in the bedroom but haven’t told me yet?",
  "What’s a turn-on you think I don’t fully realize about you?",
  "If you had to describe our chemistry in three words, what would they be?",
  "What’s one fantasy that feels a little embarrassing to admit?",
  "When do you miss me the most during a normal day?",
  "What’s something small I do that really excites you?",
  "What’s one thing you want more of?",
  "What’s the boldest thought you’ve had about me today?",
  // Bold / deeper intimacy prompts
  "What is the most intense fantasy you’ve had about us that you haven’t told me?",
  "What’s something you’ve wanted me to do to you but were worried I might judge?",
  "If we had a “no consequences” night, what is one daring thing you’d want to try?",
  "Which part of my body do you think about the most when you’re turned on, and why?",
  "Describe a scenario with me that you think would seriously test your self-control.",
  "Have you ever thought “we shouldn’t be doing this” with me in a fun, thrilling way? What was happening?",
  "What’s one thing you wish I would initiate more often when we’re alone?",
  "What’s the most surprised you’ve ever been by how turned on you were with me?",
  "If I gave you full control for one night, what’s the first thing you’d change?",
  "What kind of talk from me would make you melt the fastest?",
  "What’s a role or persona you’d secretly like to see me play with you?",
  "Have you ever replayed a specific moment between us in your head later? Describe it.",
  "What is your favorite way for me to touch you when you really want my attention?",
  "What’s a line you’re curious to cross with me but haven’t yet?",
  "What did you first notice about me that made you think, “I want them in a more than innocent way”?",
  "Name one place (not our bedroom) where you’d love for us to get carried away together.",
  "What’s something I do without realizing it that turns you on?",
  "If I gave you permission to surprise me with something wild, what kind of thing are we talking about?",
  "What’s something that secretly intrigues you when you think of us?",
  "What’s one instruction you’d love to give me in bed that you haven’t said out loud?",
  "What’s a bold way you’d want me to show that I “own” your attention in public (but still be discreet)?",
  "Have you ever been turned on just by the way I looked at you? Describe that look.",
  "If I asked you to design a daring date night, what’s the most adventurous part?"
];

const dareCards = [
  // Softer flirty dares (you can treat these as “warm-up”)
  "Give me a 30-second shoulder or neck massage.",
  "Whisper something you want to do with me in my ear.",
  "Kiss me somewhere that isn’t my lips or hands.",
  "Describe, in detail, how you’d like our next date night to end.",
  "Look into my eyes for 20 seconds without laughing, then kiss me.",
  "Compliment three different parts of my body.",
  // Bold dares (touchy/intense but still non-explicit)
  "Let me guide your hands over me for one minute while I tell you exactly what I like and don’t like.",
  "Use only your mouth to give me a teasing “tour” of three parts of my body.",
  "Blindfold yourself and let me position your hands and lips where I want them.",
  "Sit on my lap (or pull me into your lap).",
  "Put my hand exactly where you want it and tell me what you want from it.",
  "Lie back and let me explore you with my hands while you’re only allowed to react, not talk.",
  "Press me against a wall or surface and show me how much you want me—no words, just body language.",
  "Whisper in my ear a detailed description of one fantasy involving just the two of us.",
  "Take off one item of my clothing and one of yours, then hold me close for one full minute.",
  "Use your hands to trace every curve of my body over clothing, as slowly as you can.",
  "Guide my face and mouth exactly where you want my attention.",
  "Let me sit or lie how I want, then you position yourself in the way that feels most tempting for you.",
  "Put your hands behind your back while I touch you; you can only ask for “more,” “less,” or “don’t stop.”",
  "Straddle me (or have me straddle you) and don’t break eye contact until the next turn is over.",
  "Take my hands and place them in two different spots on you, then tell me how firmly you want to be touched.",
  "Pick one item of your clothing for me to slowly remove, and you’re not allowed to help.",
  "Let me choose a body part and you focus all your kissing and touching there for 30 seconds.",
  "Wrap your arms and legs around me in the most possessive way you can.",
  "Take my hand and slide it somewhere that would surprise me.",
  "Let me pin you down (or you pin me down) in a way that feels powerful but safe.",
  "Give me a slow, lingering kiss that makes it hard to stop.",
  "Hold me as close as you can for 30 seconds without saying a word.",
  "Whisper exactly what you want from me later tonight.",
  "Take control for one minute and show me with your body how much you want me.",
  "Choose any part of my body and give it your full attention for 30 seconds."
];

// Utility: make a shuffled copy of an array
function shuffledCopy(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Deck state
let truthDeck = shuffledCopy(truthCards);
let dareDeck = shuffledCopy(dareCards);

// UI elements
const cardTypeEl = document.getElementById("card-type");
const cardTextEl = document.getElementById("card-text");

const btnTruth = document.getElementById("btn-truth");
const btnDare = document.getElementById("btn-dare");
const btnRandom = document.getElementById("btn-random");
const btnReset = document.getElementById("btn-reset");

// Functions to draw cards
function drawTruth() {
  if (truthDeck.length === 0) {
    truthDeck = shuffledCopy(truthCards);
  }
  const text = truthDeck.pop();
  showCard("Truth / Sip", text);
}

function drawDare() {
  if (dareDeck.length === 0) {
    dareDeck = shuffledCopy(dareCards);
  }
  const text = dareDeck.pop();
  showCard("Dare", text);
}

function drawRandom() {
  const pool = [];
  if (truthDeck.length > 0 || truthCards.length > 0) pool.push("truth");
  if (dareDeck.length > 0 || dareCards.length > 0) pool.push("dare");

  if (pool.length === 0) {
    showCard("No Cards", "No prompts available.");
    return;
  }

  const choice = pool[Math.floor(Math.random() * pool.length)];
  if (choice === "truth") {
    drawTruth();
  } else {
    drawDare();
  }
}

function showCard(type, text) {
  cardTypeEl.textContent = type;
  cardTextEl.textContent = text;
}

// Reset decks
function resetDecks() {
  truthDeck = shuffledCopy(truthCards);
  dareDeck = shuffledCopy(dareCards);
  cardTypeEl.textContent = "Deck Reset";
  cardTextEl.textContent = "Tap any button to draw the next card.";
}

// Event listeners
btnTruth.addEventListener("click", drawTruth);
btnDare.addEventListener("click", drawDare);
btnRandom.addEventListener("click", drawRandom);
btnReset.addEventListener("click", resetDecks);
