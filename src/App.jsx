import { useState } from 'react'
import  './App.css'


const App = () => {
  const start_jobs = [
    {
      id:1,
      company: "Gem",
      name: "SWE 1",
      url: "www.linkedin.com",
      status: "NA"

    },
    {
      id:2,
      company: "Borq",
      name: "Software Engineer",
      url: "www.linkedin.com",
      status: "NA"
    }, 
    {
      id:3,
      company: "Zip",
      name: "Junior SWE",
      url: "www.linkedin.com",
      status: "NA"
    }
  ]

  const [jobs, setJobs] = useState(start_jobs)
  const [newJobUrl, setNewJobUrl] = useState('')

  const handleJobUrlChange = (event) => {
    console.log(event.target.value)
    setNewJobUrl(event.target.value)
  }


  const handleJobStatusChange = (id, event) => {
    event.preventDefault()
    console.log(event)
    console.log(id)
    
    const updated_jobs = jobs.map( j  => {
      if (j.id === id) {
        const jobObject = {
                            ...j,
                            status: event.target.value

                          }

        return jobObject
      } else {
        return j
      }
    })

    setJobs(updated_jobs);
  }


  const addJob = (event) => {
    event.preventDefault()
    console.log("button clicked", event.target)
    const jobObject = {
      id: jobs.length + 1,
      name: 'SWE',
      company : "lame",
      url: newJobUrl,
      status: "NA"
    }

    setJobs(jobs.concat(jobObject))
    setNewJobUrl('')
  }

  return (
    <>
      <h1>Job Tracker</h1>
      <form onSubmit={addJob}>
        <input
          className='linkedin-input'
          placeholder='LinkedIn URL...'
          value={newJobUrl}
          onChange={handleJobUrlChange}
        />
        <button type='submit' className='submit-btn'>save</button>
      </form>

      <table className='job-applications'>
        <tbody>
          <tr>
            <th>Company</th>
            <th>Position</th>
            <th>Job URL</th>
            <th>Status</th>

          </tr>
          {
            jobs.map(job =>
              <tr key={job.id}>
                <td>{job.company}</td>
                <td>{job.name}</td>
                <td><a href="url">{job.url}</a></td>
                <td>
                  <select name="status" className='app-status' onChange={(e) => handleJobStatusChange(job.id, e)}>
                      <option value="NA">N/A</option>
                      <option value="pending">Pending</option>
                      <option value="referred">Referred</option>
                      <option value="applied">Applied</option>
                      <option value="rejected">Rejected</option>
                    </select>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  )
}

export default App
