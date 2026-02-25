import React, { useState } from 'react';
import { 
  Book, 
  Box, 
  Sword, 
  Ghost, 
  Zap, 
  Terminal, 
  Compass, 
  Hammer,
  Wind,
  Flame,
  Skull,
  Mountain,
  Layers,
  ChevronRight,
  Info
} from 'lucide-react';

// Technical reference data matching Faithful 64x / Java Edition identifiers
const GUIDE_BLOCKS = {
  GRASS_BLOCK: 1,
  STONE: 3,
  OAK_LOG: 4,
  SAND: 6,
  DIRT: 2,
  GOLD_INGOT: 42,
  DIAMOND: 43,
  VOID_SHARD: 58,
  NULL_INGOT: 57,
  NULL_STONE: 50
};

const App = () => {
  const [activeTab, setActiveTab] = useState('basics');

  const tabs = [
    { id: 'basics', label: 'Getting Started', icon: <Compass size={18} /> },
    { id: 'blocks', label: 'Technical Blocks', icon: <Box size={18} /> },
    { id: 'mobs', label: 'Bestiary', icon: <Ghost size={18} /> },
    { id: 'crafting', label: 'Assembly', icon: <Hammer size={18} /> },
    { id: 'null', label: 'The Null Dimension', icon: <Zap size={18} /> },
    { id: 'commands', label: 'Console Commands', icon: <Terminal size={18} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'basics':
        return (
          <div className="space-y-6">
            <header className="border-b border-white/10 pb-4">
              <h1 className="text-3xl font-bold text-blue-400">Welcome to Pixelcraft</h1>
              <p className="text-slate-400 mt-2">The open-source survival voxel engine by Asteroid Works.</p>
            </header>
            
            <section className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-white/5">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                  <Mountain size={20} className="text-green-400" />
                  Biomes
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li><strong className="text-white">Plains:</strong> grass_block and oak_log generation.</li>
                  <li><strong className="text-white">Desert:</strong> sand and sandstone. Home to Husks.</li>
                  <li><strong className="text-white">Snow:</strong> snow_block and ice. Hostile night spawns.</li>
                  <li><strong className="text-white">Jungle:</strong> jungle_log and melon. Tropical density.</li>
                </ul>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-white/5">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                  <Layers size={20} className="text-purple-400" />
                  Technical Generation
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li><strong className="text-white">mineshafts:</strong> Oak supports and cobweb.</li>
                  <li><strong className="text-white">dungeons:</strong> stone_bricks fortresses.</li>
                  <li><strong className="text-white">buried_treasure:</strong> Loot chests under sand.</li>
                </ul>
              </div>
            </section>

            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
              <h3 className="font-bold mb-3 flex items-center gap-2 text-blue-300">
                <Info size={18} />
                Input Reference
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                <div className="flex flex-col gap-1">
                  <span className="text-slate-500 uppercase font-bold">Movement</span>
                  <span><kbd className="bg-slate-700 px-1 rounded">WASD</kbd> Walk</span>
                  <span><kbd className="bg-slate-700 px-1 rounded">SPACE</kbd> Jump</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-slate-500 uppercase font-bold">Interface</span>
                  <span><kbd className="bg-slate-700 px-1 rounded">E</kbd> Inventory</span>
                  <span><kbd className="bg-slate-700 px-1 rounded">T</kbd> Console</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-slate-500 uppercase font-bold">Creative</span>
                  <span><kbd className="bg-slate-700 px-1 rounded">F3</kbd> Mode Swap</span>
                  <span><kbd className="bg-slate-700 px-1 rounded">CTRL</kbd> Fast Fly</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-slate-500 uppercase font-bold">System</span>
                  <span><kbd className="bg-slate-700 px-1 rounded">ESC</kbd> Pause/Save</span>
                  <span><kbd className="bg-slate-700 px-1 rounded">1-9</kbd> Hotbar</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'blocks':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Faithful 64x Identifiers</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {[
                { name: 'grass_block', id: 1, type: 'Shovel' },
                { name: 'stone', id: 3, type: 'Pickaxe' },
                { name: 'oak_log', id: 4, type: 'Axe' },
                { name: 'sand', id: 6, type: 'Shovel' },
                { name: 'cactus', id: 8, type: 'Hands' },
                { name: 'bricks', id: 10, type: 'Pickaxe' },
                { name: 'cobblestone', id: 11, type: 'Pickaxe' },
                { name: 'iron_ore', id: 25, type: 'Pickaxe' },
                { name: 'gold_ore', id: 26, type: 'Pickaxe' },
                { name: 'diamond_ore', id: 27, type: 'Pickaxe' },
                { name: 'tnt', id: 32, type: 'Explosive' },
                { name: 'furnace', id: 34, type: 'Utility' },
              ].map(block => (
                <div key={block.id} className="bg-slate-800 p-3 rounded border border-white/5 flex flex-col items-center hover:border-blue-500/50 transition-colors">
                  <div className="w-12 h-12 bg-slate-700 rounded mb-2 flex items-center justify-center text-[10px] text-slate-400 font-mono">ID: {block.id}</div>
                  <span className="font-mono text-[11px] text-center text-blue-300">{block.name}</span>
                  <span className="text-[9px] text-slate-500 uppercase mt-1 tracking-widest">{block.type}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'mobs':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Skull className="text-red-500" /> Bestiary
            </h2>
            <div className="space-y-4">
              <MobCard 
                name="Reaper" 
                health="150 HP" 
                type="Boss" 
                desc="High-altitude flying skeletal entity. Phase 2 triggers at 50% HP (Skull emissive red). Summons skeleton mobs and leaves poison trails."
                summon="Spawned when a skeleton dies in a sand pit (surrounded by 3+ sand/sandstone/sand_brick)."
                color="border-red-500 bg-red-950/20"
              />
              <MobCard 
                name="sand_defender / snow_defender" 
                health="40-50 HP" 
                type="Guardian" 
                desc="Neutral golems. Massive knockback potential. Drops golem_eye."
                color="border-blue-400 bg-blue-950/20"
              />
              <MobCard 
                name="ghost" 
                health="15 HP" 
                type="Hostile (Night)" 
                desc="Translucent flying mob. Uses swoop AI to attack players."
                color="border-indigo-400 bg-indigo-950/20"
              />
              <MobCard 
                name="husk / zombie" 
                health="20 HP" 
                type="Hostile" 
                desc="Undead threats. husk is immune to sunlight burning."
                color="border-green-600 bg-green-950/20"
              />
            </div>
          </div>
        );

      case 'crafting':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Recipe Identifiers</h2>
              <div className="flex gap-2">
                 <span className="bg-amber-600/20 text-amber-500 text-[10px] px-2 py-1 rounded border border-amber-600/30 font-bold uppercase">crafting_table REQUIRED</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <section className="space-y-2">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Recipes</h3>
                <RecipeRow out="oak_planks (4)" reqs="1 oak_log" />
                <RecipeRow out="stick (4)" reqs="2 oak_planks" />
                <RecipeRow out="crafting_table" reqs="4 oak_planks" />
                <RecipeRow out="chest" reqs="8 oak_planks" table />
                <RecipeRow out="stone_pickaxe" reqs="3 cobblestone + 2 stick" table />
                <RecipeRow out="diamond_sword" reqs="2 diamond + 1 stick" table />
              </section>
              
              <section className="space-y-4">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Smelting</h3>
                <div className="bg-slate-800/40 p-5 rounded-xl border border-white/5 space-y-4">
                  <SmeltRow input="iron_ore" output="iron_ingot" color="text-slate-300" />
                  <SmeltRow input="gold_ore" output="gold_ingot" color="text-yellow-400" />
                  <SmeltRow input="void_shard" output="null_ingot" color="text-indigo-400" />
                </div>
              </section>
            </div>
          </div>
        );

      case 'null':
        return (
          <div className="space-y-6">
            <div className="p-8 bg-gradient-to-br from-indigo-900 to-black rounded-2xl border border-indigo-500/50 shadow-2xl shadow-indigo-500/30">
              <h2 className="text-3xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
                THE NULL RITUAL
              </h2>
              <p className="text-indigo-200 text-sm mb-6">Piercing the veil requires technical precision.</p>
              
              <div className="space-y-4">
                <div className="bg-black/40 p-5 rounded-xl border border-white/10">
                  <h4 className="text-white text-sm font-bold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    Technical Conditions
                  </h4>
                  <ol className="list-decimal list-inside text-xs text-indigo-100 space-y-2 font-mono">
                    <li>Place 1x <span className="text-amber-400 font-bold">oak_log</span> on level Y.</li>
                    <li>Place 1x <span className="text-amber-400 font-bold">chest</span> directly on top.</li>
                    <li>Verify zero adjacent solid blocks.</li>
                  </ol>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <IngredientBox count="2" label="diamond" />
                  <IngredientBox count="1" label="dirt" />
                  <IngredientBox count="5" label="gold_ingot" />
                </div>

                <div className="bg-indigo-500/10 p-3 rounded-lg border border-indigo-500/20 text-center">
                  <p className="text-[10px] text-indigo-400 italic font-mono">
                    VALIDATION: EXACT QUANTITIES ONLY. NULL_PORTAL WILL GENERATE UPON CHEST CLOSURE.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-slate-800/80 p-5 rounded-xl border border-white/5">
                <h3 className="font-bold text-blue-400 mb-3 flex items-center gap-2">
                  <Wind size={18} />
                  null_dimension
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed font-mono">TERRAIN: null_stone with electric blue sheen. ATMOSPHERE: High-density void particles.</p>
              </div>
              <div className="bg-slate-800/80 p-5 rounded-xl border border-white/5">
                <h3 className="font-bold text-blue-400 mb-3 flex items-center gap-2">
                  <Layers size={18} />
                  null_assets
                </h3>
                <ul className="text-slate-300 text-xs space-y-2 font-mono">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> null_ore</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> null_crystal</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> void_shard</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'commands':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Kernel Developer Console</h2>
            <div className="bg-black/40 p-4 rounded-lg border border-white/5 flex items-center gap-3">
              <Terminal size={20} className="text-slate-500" />
              <p className="text-xs text-slate-400 italic tracking-wide">Manual override for voxel engine parameters.</p>
            </div>
            
            <div className="grid gap-2 font-mono">
              <CmdRow cmd="/creative" desc="Swap survival/creative states." />
              <CmdRow cmd="/fly" desc="Toggle zero-G flight vectors." />
              <CmdRow cmd="/give [identifier] [count]" desc="Example: /give diamond_sword 1" />
              <CmdRow cmd="/find [structure_id]" desc="Scans noise seeds for features." />
              <CmdRow cmd="/summon [mob_id]" desc="Example: /summon poison_revenant" />
              <CmdRow cmd="/tp [x] [y] [z]" desc="Spatial translocation." />
              <CmdRow cmd="/weather [storm|clear]" desc="Modify fog parameters." />
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col items-center p-4 md:p-8 font-sans">
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8">
        
        {/* Navigation Sidebar */}
        <aside className="md:w-72 space-y-4 shrink-0">
          <div className="flex items-center gap-4 px-4 mb-10">
            <div className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-xl shadow-blue-500/20">
              <Book className="text-white" size={28} />
            </div>
            <div>
              <h2 className="font-black tracking-tighter text-2xl leading-none">PIXELCRAFT</h2>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Guide v1.2: faithful-64x</span>
            </div>
          </div>
          
          <nav className="space-y-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-all group ${
                  activeTab === tab.id 
                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/30 translate-x-1' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  {tab.icon}
                  {tab.label}
                </div>
                <ChevronRight size={14} className={`transition-opacity ${activeTab === tab.id ? 'opacity-100' : 'opacity-0'}`} />
              </button>
            ))}
          </nav>
          
          <div className="mt-12 p-5 bg-slate-900/60 rounded-2xl border border-white/5 backdrop-blur-md">
             <div className="flex items-center gap-2 mb-3">
                <Terminal size={14} className="text-blue-400" />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Asset Mapping</span>
             </div>
             <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                Kernel build: Pixelcraft. Mapping: minecraft_java_faithful_64. Neural analysis: gemini-2.5-flash.
             </p>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 bg-slate-900/40 rounded-3xl border border-white/10 p-6 md:p-12 min-h-[650px] backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            {renderContent()}
          </div>
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />
        </main>
      </div>

      <footer className="mt-16 text-slate-600 text-[10px] font-bold uppercase tracking-[0.4em]">
        &copy; 2026 Asteroid Works &bull; Project Pixelcraft
      </footer>
    </div>
  );
};

const MobCard = ({ name, health, type, desc, summon, color }) => (
  <div className={`p-6 rounded-2xl border ${color} transition-all hover:translate-y-[-2px] hover:shadow-lg`}>
    <div className="flex justify-between items-start mb-3">
      <h3 className="font-bold text-xl tracking-tight font-mono">{name}</h3>
      <div className="text-right">
        <div className="text-[9px] font-black uppercase tracking-widest opacity-50 mb-1">{type}</div>
        <div className="text-xs font-mono font-bold text-white bg-black/30 px-2 py-0.5 rounded-full">{health}</div>
      </div>
    </div>
    <p className="text-sm text-slate-400 leading-relaxed mb-4">{desc}</p>
    {summon && (
      <div className="pt-4 border-t border-white/5 flex items-start gap-3">
        <Zap size={16} className="text-yellow-400 mt-0.5 shrink-0" />
        <p className="text-xs text-yellow-100/70 italic leading-relaxed">{summon}</p>
      </div>
    )}
  </div>
);

const RecipeRow = ({ out, reqs, table }) => (
  <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group">
    <div className="flex items-center gap-3">
      <div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-blue-500 transition-colors" />
      <span className="text-sm font-mono text-blue-200">{out}</span>
    </div>
    <div className="flex items-center gap-3">
      <span className="text-slate-500 text-[10px] font-mono">{reqs}</span>
      {table && <div className="w-3.5 h-3.5 bg-amber-600/40 border border-amber-600/50 rounded-sm" title="Requires technical table" />}
    </div>
  </div>
);

const SmeltRow = ({ input, output, color }) => (
  <div className="flex items-center gap-4 text-[11px] font-mono font-bold">
    <div className="text-right flex-1 text-slate-400">{input}</div>
    <Flame className="text-orange-500/80" size={16} />
    <div className={`flex-1 ${color} tracking-tight`}>{output}</div>
  </div>
);

const IngredientBox = ({ count, label }) => (
  <div className="bg-indigo-950/40 p-4 rounded-xl text-center border border-indigo-400/20 backdrop-blur-md">
    <div className="text-2xl font-black text-white">{count}</div>
    <div className="text-[8px] uppercase tracking-widest text-indigo-400 font-bold font-mono">{label}</div>
  </div>
);

const CmdRow = ({ cmd, desc }) => (
  <div className="group flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-black/20 border border-white/5 hover:border-blue-500/40 transition-all hover:bg-black/40">
    <code className="text-blue-400 font-mono text-sm font-bold group-hover:text-blue-300">{cmd}</code>
    <span className="text-xs text-slate-500 font-medium">{desc}</span>
  </div>
);

export default App;
