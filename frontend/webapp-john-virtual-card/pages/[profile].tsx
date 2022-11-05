import styles from "../styles/UserProfile.module.css"

function Page({data}:any) {
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Hello, my name is {data.full_name}</h1>
            <h3>Follow me:</h3>
            <ul className={styles.profileData}>
                <li><a href={data.linkedin_url}>LinkedIn</a></li>
                <li><a href={data.github_url}>GitHub</a></li>
                <li><a href={`mailto:${data.email}`}></a>{data.email}</li>
                <li><a href={`telto:${data.tel}`}></a>{data.tel}</li>
            </ul>
        </div>
    )
}

export async function getServerSideProps(context:any) {
    const query = context.params.profile
    const endpoint = 'http://localhost:8000/api/users/'+query
    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }
    const result = await fetch(endpoint, options)
    const data = await result.json()
    if (result.status == 404)
    {
        return {
            notFound: true
        }
    }
    return {props: {data}}
}

export default Page