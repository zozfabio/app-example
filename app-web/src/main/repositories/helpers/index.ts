export function getBaseUrl(): string | undefined {
    let baseURL: string | undefined = process.env.REACT_APP_API_BASE_URL;
    const localhostIndex = baseURL?.indexOf('localhost');
    if (localhostIndex !== undefined && localhostIndex > -1) {
        baseURL = baseURL?.replace('localhost', window.location.hostname);
    }
    return baseURL;
}
