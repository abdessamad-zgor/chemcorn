
export async function res<T>(p:Promise<T>) {
    try{
        let data = await p
        return {data, error:null}
    }catch(error){
        return {data:null, error}
    }
}

