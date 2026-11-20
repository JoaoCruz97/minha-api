export function formatPrice(value) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value);
}

export function formatDate(value) {
    return new Intl.DateTimeFormat("pt-BR").format(new Date(value));
}

export function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatCategory(key) {
    const map = {
        aneis: "Anéis",
        colares: "Colares",
        correntes: "Correntes",
        pulseiras: "Pulseiras",
        brincos: "Brincos",
        pingentes: "Pingentes",
        tornozeleiras: "Tornozeleiras",
        outros-acessorios: "Outros Acessórios",
    };
    return map[key] || key;
}

export function formatMaterial(key) {
    const map = {
        "prata-925": "Prata 925",
        "prata-950": "Prata 950",
        "aco-inoxidavel": "Aço Inoxidável",
        semijoia: "Semijoia",
    };
    return map[key] || key;
}

export function formatGender(key) {
    const map = {
        masculino: "Masculino",
        feminino: "Feminino",
        unissex: "Unissex",
    };
    return map[key] || key;
}
