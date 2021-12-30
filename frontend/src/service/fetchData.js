async function fetchData(data) {     
    let res  = await fetch(`http://localhost:3000/api/${data}`, { method: 'GET' })
    return await res.json()
}

async function fetchCVData(data) {
    return await fetchData(`cv/${data}`)
}

export async function fetchDescription() {
    return await fetchCVData('description')
}

export async function fetchEducations() {
    return await fetchCVData('educations')
}

export async function fetchInterests() {
    return await fetchCVData('interests')
}

export async function fetchJob() {
    return await fetchCVData('job')
}

export async function fetchLanguages() {
    return await fetchCVData('languages')
}

export async function fetchProjects() {
    return await fetchCVData('projects')
}

export async function fetchSkills() {
    return await fetchCVData('skills')
}

export async function fetchWorkExperiences() {
    return await fetchCVData('workExperiences')
}

export async function fecthContact() {
    return await fetchData('contact')
}