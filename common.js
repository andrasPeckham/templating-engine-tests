export const generateList = () => {
    const list = [];
    for (let i = 1; i <= 100; i++) {
        list.push({ name: `Item ${i}`, description: `Description for Item ${i}` });
    }
    return list;
};