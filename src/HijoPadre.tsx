export default function HijoPadre(props: HijoPadreProps){

    return (
        <input type="text" onKeyUp={(e) => props.manejarkeyup2(e.currentTarget.value)}/>
    )

}
interface HijoPadreProps{
    manejarkeyup2(texto: string): void
}