import React, { Component } from 'react';

const Tasks = ({ tasks, deleteTask }) => {
    return (
        <table border="0" cellSpacing="0" cellPadding="0">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>TASK DETAILS</th>
                    <th>ACTION</th>
                </tr>
            </thead>

            <tbody>
                {
                    tasks.map(task => {
                        return (
                            <tr>
                                <td className="no">{task.id}</td>
                                <td className="text-left task-details"><h3>{task.taskName}</h3></td>
                                <td className="total"><button type="button" className="btn btn-danger deletebutton" onClick={() => { deleteTask(task.id) }}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )

}

export default Tasks;