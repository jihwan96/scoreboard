import React from "react";

export class StopWatch extends React.Component {
    tickRef;
    state = {
        timer: 0,
        isRunning: false
    };

    // DOM 이 렌더링 된 직후에 호출되는 라이프사이클 메서드 (onCreate())
    // 예) api 호출, 서드파티 라이브러리 로딩
    componentDidMount() {
        this.tickRef = setInterval(this.tick, 1000);
    }

    // DOM 이 파괴되기 직전에 호출 (onDestory())
    // 예) 리소스 해제
    componentWillUnmount() {
    }


    render() {
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{this.state.timer}</span>
                <button onClick={this.handleStopWatch}>{(this.state.isRunning) ? 'STOP' : 'START'}</button>
                <button onClick={this.resetStopWatch}>Reset</button>
            </div>
        )
    }

    tick = () => {
        if (this.state.isRunning) {
            this.setState(prevState => ({
                timer: prevState.timer + 1
            }))
        }
    }

    handleStopWatch = () => {
        this.setState(prevState => ({
            isRunning: !prevState.isRunning
        }));
    }

    resetStopWatch = () => {
        this.setState(prevState => ({
            timer: 0,
            isRunning: false
        }))
    }
}