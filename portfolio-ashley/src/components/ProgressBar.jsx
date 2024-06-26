function ProgressBar({nbProject}) {

    return (
       
            (nbProject === "one") 
            ? 
            <div className="progress">
                <div className="progress-bar" style={{width: "20%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">1</div>
            </div>
            
            : (nbProject === "two") ? 
                <div className="progress">
                    <div className="progress-bar" style={{width: "40%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">2</div>
                </div>
            : (nbProject === "three") ? 
                <div className="progress">
                    <div className="progress-bar" style={{width: "60%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">3</div>
                </div>
            : (nbProject === "four") ? 
                <div className="progress">
                    <div className="progress-bar" style={{width: "80%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">4</div>
                </div>
            : (nbProject === "five") ? 
                <div className="progress">
                    <div className="progress-bar" style={{width: "100%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">5 ou +</div>
                </div>
            : null
    )
}

export default ProgressBar