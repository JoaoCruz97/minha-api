export const CATEGORIAS = [
    { key: "aneis", label: "Anéis" },
    { key: "colares", label: "Colares" },
    { key: "correntes", label: "Correntes" },
    { key: "pulseiras", label: "Pulseiras" },
    { key: "brincos", label: "Brincos" },
    { key: "pingentes", label: "Pingentes" },
    { key: "tornozeleiras", label: "Tornozeleiras" },
    { key: "outros-acessorios", label: "Outros Acessórios" },
];

export const MATERIAIS = [
    { key: "prata-925", label: "Prata 925" },
    { key: "prata-950", label: "Prata 950" },
    { key: "aco-inoxidavel", label: "Aço Inoxidável" },
    { key: "semijoia", label: "Semijoia" },
];

export const STATUS_PEDIDO = [
    { key: "aguardando-pagamento", label: "Aguardando pagamento" },
    { key: "pagamento-aprovado", label: "Pagamento aprovado" },
    { key: "em-preparacao", label: "Em preparação" },
    { key: "enviado", label: "Enviado" },
    { key: "entregue", label: "Entregue" },
    { key: "cancelado", label: "Cancelado" },
];

export const ROUTES = {
    HOME: "/",
    CATALOG: "/catalogo",
    PRODUCT_DETAIL: (id) => `/produto/${id}`,
    CART: "/carrinho",
    CHECKOUT: "/checkout",
    CHECKOUT_SUCCESS: "/checkout/sucesso",
    LOGIN: "/login",
    REGISTER: "/cadastro",
    FORGOT_PASSWORD: "/esqueci-minha-senha",
    RESET_PASSWORD: "/redefinir-senha",
    ACCOUNT: "/minha-conta",
    ADMIN_DASHBOARD: "/admin/dashboard",
    ADMIN_PRODUCTS: "/admin/produtos",
    ADMIN_PRODUCT_NEW: "/admin/produtos/novo",
    ADMIN_PRODUCT_EDIT: (id) => `/admin/produtos/${id}/editar`,
    ADMIN_ORDERS: "/admin/pedidos",
    ADMIN_USERS: "/admin/usuarios",
};
