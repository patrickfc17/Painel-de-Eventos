const redirect = (to) => {
    const url = window.location.host.includes("github")
        ? `${window.location.origin}/Painel-de-Eventos`
        : `${window.location.origin}`;
        
    window.location.replace(new URL(`${url}${to}`));
};
