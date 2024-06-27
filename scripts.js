function rewriteArticle() {
    const article = document.getElementById('article').value;

    if (article) {
        const rewritten = article.split(' ').map(word => {
            return synonyms[word.toLowerCase()] || word;
        }).join(' ');

        document.getElementById('rewrittenArticle').value = rewritten;
    } else {
        document.getElementById('rewrittenArticle').value = 'Please enter an article.';
    }
}

const synonyms = {
    "quick": "fast",
    "brown": "dark",
    "fox": "canine",
    "jumps": "leaps",
    "over": "above",
    "lazy": "idle",
    "dog": "hound",
    "beautiful": "lovely",
    "big": "large",
    "small": "tiny",
    "happy": "joyful",
    "sad": "unhappy",
    "good": "excellent",
    "bad": "poor",
    "smart": "intelligent",
    "dumb": "stupid",
    "rich": "wealthy",
    "poor": "needy",
    "strong": "powerful",
    "weak": "fragile",
    "old": "elderly",
    "new": "fresh",
    "hot": "warm",
    "cold": "chilly",
    "clean": "tidy",
    "dirty": "filthy",
    "fast": "quick",
    "slow": "sluggish",
    "hard": "difficult",
    "easy": "simple",
    "dark": "dim",
    "bright": "vivid",
    "happy": "cheerful",
    "sad": "melancholy",
    "funny": "humorous",
    "serious": "solemn",
    "angry": "furious",
    "calm": "serene",
    "friendly": "amicable",
    "hostile": "antagonistic",
    "brave": "courageous",
    "fearless": "dauntless",
    "quiet": "silent",
    "noisy": "loud",
    "safe": "secure",
    "dangerous": "hazardous",
    "expensive": "costly",
    "cheap": "inexpensive",
    "old": "ancient",
    "modern": "contemporary",
    "near": "close",
    "far": "distant",
    "happy": "blissful",
    "angry": "irritated",
    "loud": "boisterous",
    "soft": "gentle",
    "sweet": "pleasant",
    "sour": "tart",
    "bitter": "acrid",
    "fresh": "crisp",
    "ripe": "mature",
    "fragrant": "aromatic",
    "stinky": "malodorous",
    "tasty": "delicious",
    "hungry": "starving",
    "thirsty": "parched",
    "dry": "arid",
    "wet": "damp",
    "heavy": "weighty",
    "light": "airy",
    "thick": "dense",
    "thin": "slender",
    "rough": "coarse",
    "smooth": "sleek",
    "hard": "firm",
    "soft": "yielding",
    "sharp": "keen",
    "blunt": "dull",
    "clean": "pure",
    "dirty": "impure",
    "true": "genuine",
    "false": "bogus",
    "real": "authentic",
    "fake": "counterfeit",
    "open": "unlocked",
    "closed": "shut",
    "short": "brief",
    "long": "extended",
    "wide": "broad",
    "narrow": "slim",
    "deep": "profound",
    "shallow": "superficial",
    "thick": "stout",
    "thin": "slender",
    "broad": "wide",
    "narrow": "tight",
    "big": "huge",
    "small": "tiny",
    "loud": "noisy",
    "quiet": "silent",
    "smooth": "slick",
    "rough": "coarse",
    "bright": "shiny",
    "dull": "dim",
    "rich": "affluent",
    "poor": "impoverished",
    "expensive": "costly",
    "cheap": "inexpensive",
    "old": "ancient",
    "new": "fresh",
    "young": "youthful",
    "hot": "warm",
    "cold": "chilly",
    "warm": "mild",
    "cool": "chilly",
    "icy": "frosty",
    "dry": "arid",
    "wet": "damp",
    "clean": "tidy",
    "dirty": "filthy",
    "empty": "deserted",
    "full": "overflowing",
    "weak": "fragile",
    "strong": "tough",
    "thick": "dense",
    "thin": "slender",
    "smooth": "slick",
    "rough": "coarse",
    "soft": "gentle",
    "hard": "firm",
    "easy": "simple",
    "difficult": "tough",
    "safe": "secure",
    "dangerous": "hazardous",
    "calm": "serene",
    "excited": "thrilled",
    "boring": "dull",
    "interesting": "fascinating",
    "honest": "truthful",
    "dishonest": "deceitful",
    "brave": "courageous",
    "cowardly": "timid",
    "generous": "benevolent",
    "stingy": "miserly",
    "careful": "cautious",
    "careless": "reckless",
    "lucky": "fortunate",
    "unlucky": "unfortunate",
    "beautiful": "gorgeous",
    "ugly": "hideous",
    "attractive": "appealing",
    "repulsive": "disgusting",
    "polite": "courteous",
    "rude": "impolite",
    "kind": "compassionate",
    "cruel": "merciless",
    "quiet": "silent",
    "noisy": "loud",
    "serious": "solemn",
    "funny": "humorous",
    "rich": "wealthy",
    "poor": "needy",
    "young": "youthful",
    "old": "elderly",
    "big": "large",
    "small": "tiny",
    "hot": "warm",
    "cold": "chilly",
    "happy": "joyful",
    "sad": "unhappy",
    "good": "excellent",
    "bad": "poor",
    "smart": "intelligent",
    "dumb": "stupid",
    "rich": "wealthy",
    "poor": "needy",
    "strong": "powerful",
    "weak": "fragile",
    "old": "elderly",
    "new": "fresh",
    "hot": "warm",
    "cold": "chilly",
    "clean": "tidy",
    "dirty": "filthy",
    "fast": "quick",
    "slow": "sluggish",
    "hard": "difficult",
    "easy": "simple",
    "dark": "dim",
    "bright": "vivid",
    "happy": "cheerful",
    "sad": "melancholy",
    "funny": "humorous",
    "serious": "solemn",
    "angry": "furious",
    "calm": "serene",
    "friendly": "amicable",
    "hostile": "antagonistic",
    "brave": "courageous",
    "fearless": "dauntless",
    "quiet": "silent",
    "noisy": "loud",
    "safe": "secure",
    "dangerous": "hazardous",
    "expensive": "costly",
    "cheap": "inexpensive",
    "old": "ancient",
    "modern": "contemporary",
    "near": "close",
    "far": "distant",
    "happy": "blissful",
    "angry": "irritated",
    "loud": "boisterous",
    "soft": "gentle",
    "sweet": "pleasant",
    "sour": "tart",
    "bitter": "acrid",
    "fresh": "crisp",
    "ripe": "mature",
    "fragrant": "aromatic",
    "stinky": "malodorous",
    "tasty": "delicious",
    "hungry": "starving",
    "thirsty": "parched",
    "dry": "arid",
    "wet": "damp",
    "heavy": "weighty",
    "light": "airy",
    "thick": "dense",
    "thin": "slender",
    "rough": "coarse",
    "smooth": "sleek",
    "hard": "firm",
    "soft": "yielding",
    "sharp": "keen",
    "blunt": "dull",
    "clean": "pure",
    "dirty": "impure",
    "true": "genuine",
    "false": "bogus",
    "real": "authentic"
};
