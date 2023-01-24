const itemsRef = document.querySelectorAll('.item');
const totalItems = itemsRef.length;

console.log(`Number of categories: ${totalItems}`);

for (const itemRef of itemsRef) {
    const titlesRef = itemRef.querySelector('h2');
    console.log(`Category: ${titlesRef.textContent}`);
    const NumberOfLiRef = itemRef.querySelectorAll('li');
    console.log(`Elements: ${NumberOfLiRef.length}`);
}