import IProfissional from "./types/IProfissional";
import useFetch from "./useFetch";

const useDadosProfissional = () => {
    return useFetch<IProfissional[]>({ url: 'especialistas' });
}

export default useDadosProfissional;