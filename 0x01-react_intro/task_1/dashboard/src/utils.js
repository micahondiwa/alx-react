import './App.css';

export function getFullYear() {
    return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
    return isIndex ? "ALX" : "ALX main dashboard";

}