import ProvidersCard from "./ProvidersCard";

export default async function ProvidersCatalog({providersJson} : {providersJson:Promise<ProvidersJson>}) {

    const providersJsonReady = await providersJson

    return (
        <div style={{margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    providersJsonReady.data.map((providersItem:ProvidersItem) => (
                        <div className="w-1/5 mb-10 mx-1">
                        <ProvidersCard name={providersItem.name} address={providersItem.address} tel={providersItem.telephoneNumber} imgSrc={`/images/${providersItem.name}.png`}/>
                        </div>
                    ))
                }
            </div>
    );
}