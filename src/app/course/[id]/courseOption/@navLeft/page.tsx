import ListUnitsComponent from "./getUnits"

export default function NavLeftOptionCourse({ params }: { params: {id: string } }){
    return(
      <ListUnitsComponent params={params}></ListUnitsComponent>
    )
}