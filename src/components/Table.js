import React from 'react'

export class Table extends React.Component{
    render(){
        return <div class="table-responsive">
                 <table class="table-bordered">
                     <tbody>
                          <tr>
                            <td>HTML and CSS</td>
                            <td>Serverless</td>
                            <td>Scrum</td>
                          </tr>
                          <tr>
                            <td>Programming</td>
                            <td>Restful API</td>
                            <td>Test-Driven Dev</td>
                          </tr>
                          <tr>
                              <td>Database</td>
                              <td>Javascript</td>
                              <td>Software Testing</td>
                         </tr>
                         <tr>
                             <td>Git and Github</td>
                             <td>Single Page App</td>
                             <td>UX/UI Designer</td>
                        </tr>
                     </tbody>
                    </table>
                 </div>
        
    }

}

export default Table