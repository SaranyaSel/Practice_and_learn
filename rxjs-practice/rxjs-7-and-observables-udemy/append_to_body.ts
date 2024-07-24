export default (content: string,imageUrl?: string| undefined) => {
    const node = document.createElement("p");
    const textNode = document.createTextNode(content);
    node.appendChild(textNode);

    if(imageUrl) {
        node.appendChild(document.createElement('br'));
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = content;
        node.appendChild(img);
    }

    document.body.appendChild(node);
}
