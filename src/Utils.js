export const parseImageUrl = (aspectRatio,url,width) => {
    let w = width;
    if(!aspectRatio)aspectRatio = "1:1";
    let temp = aspectRatio.split(":");
    let a = Number(temp[0]) , b = Number(temp[1]);
    let h = Math.round(w*b/a);
    w = w.toString(), h = h.toString();
    let newUrl = url.replace('{@width}',w)
                    .replace('{@height}',h)
                    .replace('{@quality}','90');
    return [newUrl, h];
}

export const linkCss = (name) => {
    const css = document.createElement('link')
    css.setAttribute('rel', 'stylesheet')
    css.setAttribute('href', `/css/${name}`)
    document.querySelector('body').appendChild(css)
}