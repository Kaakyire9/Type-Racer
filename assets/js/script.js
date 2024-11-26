document.addEventListener('DOMContentLoaded', function() {
    const texts = {
        easy: [
            "The cat sat on the mat.",
            "The sun is shining brightly.",
            "I love to eat ice cream."
        ],
        medium: [
            "The quick brown fox jumps over the lazy dog.",
            "She sells seashells by the seashore.",
            "How much wood would a woodchuck chuck if a woodchuck could chuck wood?"
        ],
        hard: [
            "To be or not to be, that is the question.",
            "All the world's a stage, and all the men and women merely players.",
            "It was the best of times, it was the worst of times."
        ]
    };

    const difficultySelect = document.getElementById('difficulty-select');
    const sampleTextDiv = document.getElementById('sample-text');

    function getRandomText(textArray) {
        const randomIndex = Math.floor(Math.random() * textArray.length);
        return textArray[randomIndex];
    }

    function updateSampleText() {
        const selectedDifficulty = difficultySelect.value;
        const selectedText = getRandomText(texts[selectedDifficulty]);
        sampleTextDiv.textContent = selectedText;
    }

    difficultySelect.addEventListener('change', updateSampleText);

    // Initialize with a random text from the default difficulty level
    updateSampleText();
});