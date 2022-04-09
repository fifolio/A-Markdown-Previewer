updatePreview = () => {

    let previewElement = document.getElementById("preview");
    let editorValue = document.getElementById("editor").value;
    let markedUpHTML = marked.parse(editorValue);
    previewElement.innerHTML = markedUpHTML;
}


document.onload = setDefault();

function setDefault() {

    let defaultText = `
# Welcome to my React Markdown Previewer!
## This is a sub-heading...

[Duck Duck Go](https://duckduckgo.com)

This is the inline code

<dl>
    <dt>First Term</dt>
    <dd>This is the definition of the first term.</dd>
    
    <dt>Second Term</dt>
    <dd>This is another definition of the second term.</dd>
</dl>

\`{ my code }\`

- First item
- Second item
- Third item
- Fourth item

> This is a blockquote


![The San Juan Mountains are beautiful!](https://mdg.imgix.net/assets/images/san-juan-mountains.jpg?auto=format&fit=clip&q=40&w=300 "San Juan Mountains")

This **word** is bold.
    `;

    marked.parse(document.getElementById("editor").value = defaultText);

    updatePreview()
}