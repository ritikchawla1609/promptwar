import React, { useState } from 'react';
import { Target, Power, Play, Pause, Square, AlertOctagon, Layers, ArrowRight, Clock, Megaphone } from 'lucide-react';

const EventPage = () => {
    // state for event lifecycle
    const [isLive, setIsLive] = useState(false);
    
    // state for round management
    const [currentRound, setCurrentRound] = useState('R3');
    const [endDestination, setEndDestination] = useState('Leaderboard');

    // state for global timer
    const [timerRunning, setTimerRunning] = useState(false);
    const [timerDisplay] = useState('27:42'); // Display is mock/static as requested
    const [customMinutes, setCustomMinutes] = useState('25');

    // state for broadcast
    const [broadcastTarget, setBroadcastTarget] = useState('All Participants');
    const [broadcastPriority, setBroadcastPriority] = useState('Normal');
    const [broadcastMessage, setBroadcastMessage] = useState('');

    return (
        <div className="min-h-screen bg-admin-bg text-gray-100 p-8 font-sans">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <Target className="w-8 h-8 text-admin-blue" />
                    <h1 className="text-3xl font-bold tracking-wider">EVENT CONTROL</h1>
                </div>
                <p className="text-gray-400">Master competition lifecycle management</p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Column 1: MASTER EVENT CONTROLS */}
                <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <Power className="w-5 h-5 text-gray-400" />
                        <h2 className="text-xl font-bold">EVENT LIFECYCLE</h2>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-6 bg-admin-bg p-3 rounded-lg border border-gray-800">
                        <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-admin-green' : 'bg-admin-red'}`}></div>
                        <span className={`font-mono text-sm font-bold ${isLive ? 'text-admin-green' : 'text-admin-red'}`}>
                            {isLive ? 'EVENT LIVE' : 'EVENT STOPPED'}
                        </span>
                    </div>

                    <div className="flex flex-col gap-3">
                        <button 
                            className={`flex items-center justify-center gap-2 py-3 rounded-lg border transition-colors ${
                                isLive 
                                ? 'opacity-50 cursor-not-allowed bg-admin-green/10 border-admin-green/30 text-admin-green/50' 
                                : 'bg-admin-green/20 border-admin-green/50 text-admin-green hover:bg-admin-green/30'
                            }`}
                            onClick={() => setIsLive(true)}
                            disabled={isLive}
                        >
                            <Play className="w-4 h-4" />
                            START EVENT
                        </button>
                        <button className="flex items-center justify-center gap-2 py-3 rounded-lg border bg-admin-orange/20 border-admin-orange/50 text-admin-orange hover:bg-admin-orange/30 transition-colors">
                            <Pause className="w-4 h-4" />
                            PAUSE EVENT
                        </button>
                        <button className="flex items-center justify-center gap-2 py-3 rounded-lg border bg-admin-green/20 border-admin-green/50 text-admin-green hover:bg-admin-green/30 transition-colors">
                            <Play className="w-4 h-4" />
                            RESUME EVENT
                        </button>
                        <button 
                            className="flex items-center justify-center gap-2 py-3 rounded-lg border bg-admin-red/20 border-admin-red/50 text-admin-red hover:bg-admin-red/30 transition-colors"
                            onClick={() => setIsLive(false)}
                        >
                            <Square className="w-4 h-4" />
                            END EVENT
                        </button>
                        <button className="flex items-center justify-center gap-2 py-4 mt-2 rounded-lg border bg-red-950 border-red-700 text-red-500 font-bold hover:bg-red-900 transition-colors">
                            <AlertOctagon className="w-5 h-5" />
                            EMERGENCY STOP
                        </button>
                    </div>
                </div>

                {/* Column 2: ROUND CONTROLS */}
                <div className="bg-admin-panel border border-gray-800 rounded-xl p-6 flex flex-col">
                    <div className="flex items-center gap-2 mb-6">
                        <Layers className="w-5 h-5 text-gray-400" />
                        <h2 className="text-xl font-bold">ROUND MANAGEMENT</h2>
                    </div>

                    <div className="text-center mb-6">
                        <div className="text-4xl font-bold text-gray-100 mb-1">ROUND 3</div>
                        <div className="text-admin-blue text-sm">The House That Remembers</div>
                    </div>

                    <div className="flex gap-2 mb-6">
                        <button 
                            onClick={() => setCurrentRound('R1')}
                            className={`flex-1 py-2 rounded border transition-colors ${
                                currentRound === 'R1' 
                                ? 'bg-admin-blue/20 border-admin-blue/50 text-admin-blue' 
                                : 'bg-admin-bg border-gray-800 text-gray-400 hover:bg-gray-800'
                            }`}
                        >
                            R1
                        </button>
                        <button 
                            disabled
                            className="flex-1 py-2 rounded border bg-admin-bg border-gray-800 text-gray-600 flex flex-col items-center justify-center relative opacity-50 cursor-not-allowed"
                        >
                            R2
                            <span className="text-[10px] bg-red-950 text-admin-red px-1 rounded absolute -top-2 border border-admin-red/30">
                                LOCKED
                            </span>
                        </button>
                        <button 
                            onClick={() => setCurrentRound('R3')}
                            className={`flex-1 py-2 rounded border transition-colors ${
                                currentRound === 'R3' 
                                ? 'bg-admin-blue/20 border-admin-blue/50 text-admin-blue' 
                                : 'bg-admin-bg border-gray-800 text-gray-400 hover:bg-gray-800'
                            }`}
                        >
                            R3
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                        <button className="py-2 rounded-lg border bg-admin-green/20 border-admin-green/50 text-admin-green hover:bg-admin-green/30 transition-colors">
                            START ROUND
                        </button>
                        <button className="py-2 rounded-lg border bg-admin-red/20 border-admin-red/50 text-admin-red hover:bg-admin-red/30 transition-colors">
                            END ROUND
                        </button>
                        <button className="py-2 rounded-lg border bg-admin-orange/20 border-admin-orange/50 text-admin-orange hover:bg-admin-orange/30 transition-colors">
                            PAUSE ROUND
                        </button>
                        <button className="flex items-center justify-center gap-1 py-2 rounded-lg border bg-admin-blue/20 border-admin-blue/50 text-admin-blue hover:bg-admin-blue/30 transition-colors">
                            NEXT ROUND <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="mt-auto">
                        <label className="block text-sm text-gray-400 mb-2">When round ends, send teams to:</label>
                        <select 
                            value={endDestination}
                            onChange={(e) => setEndDestination(e.target.value)}
                            className="w-full bg-admin-bg border border-gray-700 rounded-lg px-3 py-2 text-gray-200 focus:outline-none focus:border-admin-blue focus:ring-1 focus:ring-admin-blue"
                        >
                            <option>Leaderboard</option>
                            <option>Final Results</option>
                            <option>Podium</option>
                            <option>Waiting Room</option>
                            <option>Custom Message</option>
                        </select>
                    </div>
                </div>

                {/* Column 3: TIMER CONTROLS */}
                <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <Clock className="w-5 h-5 text-gray-400" />
                        <h2 className="text-xl font-bold">GLOBAL TIMER</h2>
                    </div>

                    <div className="flex flex-col items-center justify-center mb-8">
                        <div className="text-6xl font-mono text-admin-blue mb-4 tracking-wider">
                            {timerDisplay}
                        </div>
                        <div className="flex items-center gap-2 bg-admin-bg px-4 py-2 rounded-full border border-gray-800">
                            <div className={`w-2.5 h-2.5 rounded-full ${timerRunning ? 'bg-admin-green' : 'bg-admin-orange'}`}></div>
                            <span className="text-xs font-bold tracking-widest text-gray-300">
                                {timerRunning ? 'RUNNING' : 'PAUSED'}
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-3 mb-6">
                        <button 
                            onClick={() => setTimerRunning(true)}
                            className="flex-1 py-2 rounded-lg border bg-admin-green/20 border-admin-green/50 text-admin-green hover:bg-admin-green/30 font-bold transition-colors"
                        >
                            PLAY
                        </button>
                        <button 
                            onClick={() => setTimerRunning(false)}
                            className="flex-1 py-2 rounded-lg border bg-admin-orange/20 border-admin-orange/50 text-admin-orange hover:bg-admin-orange/30 font-bold transition-colors"
                        >
                            PAUSE
                        </button>
                        <button className="flex-1 py-2 rounded-lg border bg-admin-red/20 border-admin-red/50 text-admin-red hover:bg-admin-red/30 font-bold transition-colors">
                            RESET
                        </button>
                    </div>

                    <div className="space-y-4">
                        <div className="flex gap-2">
                            {['-5 MIN', '-1 MIN', '+1 MIN', '+5 MIN'].map((adj) => (
                                <button key={adj} className="flex-1 py-1 text-xs rounded border bg-admin-bg border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors">
                                    {adj}
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-3">
                            <input 
                                type="text"
                                value={customMinutes}
                                onChange={(e) => setCustomMinutes(e.target.value)}
                                className="bg-admin-bg border border-gray-700 rounded px-3 py-2 text-white font-mono w-24 focus:outline-none focus:border-admin-blue focus:ring-1 focus:ring-admin-blue text-center"
                                placeholder="Min"
                            />
                            <button className="flex-1 py-2 rounded border bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700 transition-colors">
                                SET TIMER
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Broadcast Row */}
            <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-6">
                    <Megaphone className="w-5 h-5 text-gray-400" />
                    <h2 className="text-xl font-bold">BROADCAST ANNOUNCEMENT</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1 space-y-4">
                        <div>
                            <div className="text-sm text-gray-400 mb-2">Target Audience</div>
                            <div className="flex flex-col gap-2">
                                {['All Participants', 'Active Teams Only', 'Specific Round'].map(target => (
                                    <label key={target} className="flex items-center gap-3 text-sm cursor-pointer">
                                        <input 
                                            type="radio" 
                                            name="target" 
                                            checked={broadcastTarget === target}
                                            onChange={() => setBroadcastTarget(target)}
                                            className="text-admin-blue bg-admin-bg border-gray-700 focus:ring-admin-blue focus:ring-offset-admin-panel"
                                        />
                                        <span className={broadcastTarget === target ? 'text-gray-100' : 'text-gray-400'}>
                                            {target}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="text-sm text-gray-400 mb-2 mt-4">Priority Level</div>
                            <div className="flex gap-2">
                                <button 
                                    onClick={() => setBroadcastPriority('Normal')}
                                    className={`flex-1 py-1 text-xs rounded border transition-colors ${
                                        broadcastPriority === 'Normal' 
                                        ? 'bg-admin-blue/20 border-admin-blue/50 text-admin-blue' 
                                        : 'bg-admin-bg border-gray-800 text-gray-500 hover:bg-gray-800'
                                    }`}
                                >
                                    Normal
                                </button>
                                <button 
                                    onClick={() => setBroadcastPriority('Important')}
                                    className={`flex-1 py-1 text-xs rounded border transition-colors ${
                                        broadcastPriority === 'Important' 
                                        ? 'bg-admin-orange/20 border-admin-orange/50 text-admin-orange' 
                                        : 'bg-admin-bg border-gray-800 text-gray-500 hover:bg-gray-800'
                                    }`}
                                >
                                    Important
                                </button>
                                <button 
                                    onClick={() => setBroadcastPriority('Critical')}
                                    className={`flex-1 py-1 text-xs rounded border transition-colors ${
                                        broadcastPriority === 'Critical' 
                                        ? 'bg-admin-red/20 border-admin-red/50 text-admin-red' 
                                        : 'bg-admin-bg border-gray-800 text-gray-500 hover:bg-gray-800'
                                    }`}
                                >
                                    Critical
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3 flex flex-col">
                        <textarea 
                            value={broadcastMessage}
                            onChange={(e) => setBroadcastMessage(e.target.value)}
                            placeholder="Enter announcement message..."
                            className="flex-1 w-full bg-admin-bg border border-gray-700 rounded-lg p-4 text-white placeholder-gray-600 focus:outline-none focus:border-admin-blue focus:ring-1 focus:ring-admin-blue mb-4 resize-none min-h-[100px]"
                            rows={3}
                        />
                        <div className="flex justify-end">
                            <button className="px-6 py-3 rounded-lg border bg-admin-uv/20 border-admin-uv/50 text-admin-uv hover:bg-admin-uv/30 font-bold flex items-center gap-2 transition-colors">
                                <Megaphone className="w-4 h-4" />
                                SEND BROADCAST
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventPage;
