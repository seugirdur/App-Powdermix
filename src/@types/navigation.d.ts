//criação da tipagem das telas para uso da library do React Navigation
export declare global {
    declare module '*.png';
    namespace ReactNavigation {
        interface RootParamList {
            Inicio: undefined;
            Pedidos: undefined;
            Contato: undefined;
            Historico: undefined;
            Produto: any;
            Formulario: undefined;
            Enviar: undefined;
            FAQ: undefined;
            };
        }
    }
