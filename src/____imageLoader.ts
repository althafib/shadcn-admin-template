interface ImageLoaderProps {
    src:string;
    quality: number
}

export default function imageLoader(props:ImageLoaderProps){
    return `${props.src}`;
}