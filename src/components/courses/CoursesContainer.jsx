import {useLocation} from 'react-router-dom'
import Course from './Course'

function useQuery(){
    return new URLSearchParams(useLocation().search)
}

const CoursesContainer = ({data}) => {
    let query = useQuery();
    const id = query.get('id') ?? null;

    if(id){
        console.log(data);
        const course = data.find(c => c.id === Number(id))
        return <Course course={course} key={course.id} />
    }

    const courses = data.map(course => <Course key={course.id} course={course}/>)
   
    return (
        <>
         <ul>{courses}</ul>   
        </>
    )
}

export default CoursesContainer
