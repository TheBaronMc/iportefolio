async function fetchData(data) {     
    let res  = await fetch(`http://localhost:3000/api/cv/${data}`, { method: 'GET' })
    res = await res.json()
    
    return res
}

export async function fetchDescription() {
    return await fetchData('description')
}

export async function fetchEducations() {
    return await fetchData('educations')
}

export async function fetchInterests() {
    return await fetchData('interests')
}

export async function fetchJob() {
    return await fetchData('job')
}

export async function fetchLanguages() {
    return await fetchData('languages')
}

export async function fetchProjects() {
    return await fetchData('projects')
}

export async function fetchSkills() {
    return await fetchData('skills')
}

export async function fetchWorkExperiences() {
    return await fetchData('workExperiences')
}