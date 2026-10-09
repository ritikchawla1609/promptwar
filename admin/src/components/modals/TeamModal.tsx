import React, { useState, useEffect } from 'react';
import { TeamRecord } from '../../types/admin';
import { UserPlus, X, Edit3 } from 'lucide-react';

interface TeamModalProps {
  isOpen: boolean;
  team: TeamRecord | null; // null for new walk-in registration
  onClose: () => void;
  onSave: (data: Partial<TeamRecord>) => Promise<void>;
}

export const TeamModal: React.FC<TeamModalProps> = ({
  isOpen,
  team,
  onClose,
  onSave
}) => {
  const isEditing = Boolean(team);

  const [teamName, setTeamName] = useState('');
  const [leaderName, setLeaderName] = useState('');
  const [leaderContact, setLeaderContact] = useState('');
  const [college, setCollege] = useState('Chandigarh University');
  const [member2, setMember2] = useState('');
  const [member3, setMember3] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (team) {
      setTeamName(team.teamName);
      setLeaderName(team.leaderName);
      setLeaderContact(team.leaderContact || '');
      setCollege(team.college || 'Chandigarh University');
      setMember2(team.members[1] || '');
      setMember3(team.members[2] || '');
    } else {
      setTeamName('');
      setLeaderName('');
      setLeaderContact('');
      setCollege('Chandigarh University');
      setMember2('');
      setMember3('');
    }
  }, [team, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamName.trim() || !leaderName.trim()) return;

    setIsSubmitting(true);
    const members = [leaderName.trim()];
    if (member2.trim()) members.push(member2.trim());
    if (member3.trim()) members.push(member3.trim());

    try {
      await onSave({
        teamName: teamName.trim(),
        leaderName: leaderName.trim(),
        leaderContact: leaderContact.trim(),
        college: college.trim(),
        members
      });
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              {isEditing ? <Edit3 className="w-4 h-4" /> : <UserPlus className="w-4 h-4" />}
            </div>
            <div>
              <h2 className="text-base font-bold text-white">
                {isEditing ? `Edit Team: ${team?.teamCode}` : 'Register Walk-In Team'}
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                {isEditing ? 'Update participant roster' : 'Add onsite walk-in registration'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-mono uppercase text-slate-400 mb-1">
              Team Name *
            </label>
            <input
              type="text"
              required
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="e.g. Cyber Wolves"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 text-white outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-mono uppercase text-slate-400 mb-1">
                Leader Name *
              </label>
              <input
                type="text"
                required
                value={leaderName}
                onChange={(e) => setLeaderName(e.target.value)}
                placeholder="Leader Name"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 text-white outline-none"
              />
            </div>
            <div>
              <label className="block font-mono uppercase text-slate-400 mb-1">
                Contact Number
              </label>
              <input
                type="text"
                value={leaderContact}
                onChange={(e) => setLeaderContact(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 text-white outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-mono uppercase text-slate-400 mb-1">
              Institution / College
            </label>
            <input
              type="text"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              placeholder="Chandigarh University"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 text-white outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div>
              <label className="block font-mono uppercase text-slate-400 mb-1">
                Member 2 (Optional)
              </label>
              <input
                type="text"
                value={member2}
                onChange={(e) => setMember2(e.target.value)}
                placeholder="Member 2"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 text-white outline-none"
              />
            </div>
            <div>
              <label className="block font-mono uppercase text-slate-400 mb-1">
                Member 3 (Optional)
              </label>
              <input
                type="text"
                value={member3}
                onChange={(e) => setMember3(e.target.value)}
                placeholder="Member 3"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 text-white outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-end space-x-3 pt-3 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold shadow-lg shadow-blue-600/20 transition-all active:scale-95 disabled:opacity-50"
            >
              {isSubmitting ? 'Saving...' : isEditing ? 'Update Team' : 'Complete Registration'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
