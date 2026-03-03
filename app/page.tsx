"use client";
import { useState, useEffect, useRef } from "react";

const BRAND = "#34C1D9";
const BRAND_PRESSED = "#259FB3";
const BRAND_LIGHT = "#E6F7FB";
const GREY = "#F7F6F3";

function ScissorLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <line x1="30" y1="5" x2="70" y2="95" stroke={BRAND} strokeWidth="7" strokeLinecap="round"/>
      <line x1="70" y1="5" x2="30" y2="95" stroke={BRAND} strokeWidth="7" strokeLinecap="round"/>
      <circle cx="25" cy="82" r="13" stroke={BRAND} strokeWidth="7" fill="none"/>
      <circle cx="75" cy="82" r="13" stroke={BRAND} strokeWidth="7" fill="none"/>
    </svg>
  );
}

// ─── Phone shells ─────────────────────────────────────────────────────────────
function PhoneShell({ children, activeNav }: { children: React.ReactNode; activeNav: "calendar" | "earnings" }) {
  return (
    <div style={{
      width: 300, background: "#fff", borderRadius: 44, flexShrink: 0,
      boxShadow: "0 0 0 11px #111, 0 0 0 13px #2a2a2a, 0 40px 100px rgba(0,0,0,0.32)",
      overflow: "hidden",
    }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 20px 0", fontSize:12, fontWeight:700, color:"#0B0F14", position:"relative" }}>
        <span style={{ fontSize:14, fontWeight:800 }}>9:41</span>
        <div style={{ width:90, height:22, background:"#111", borderRadius:20, position:"absolute", left:"50%", transform:"translateX(-50%)", top:0 }} />
        <span style={{ fontSize:11 }}>●●● 100%</span>
      </div>
      {children}
      <div style={{ display:"flex", borderTop:"1px solid #E5E7EB", padding:"10px 0 16px", background:"#fff" }}>
        {[
          { id:"home", icon:"⌂", label:"Home" },
          { id:"calendar", icon:"▦", label:"Calendar" },
          { id:"earnings", icon:"$", label:"Earnings" },
          { id:"profile", icon:"⊙", label:"Profile" },
        ].map(item => (
          <div key={item.id} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:3, opacity: activeNav === item.id ? 1 : 0.3 }}>
            <span style={{ fontSize:20 }}>{item.icon}</span>
            <span style={{ fontSize:9, fontWeight:700, color: activeNav === item.id ? BRAND : "#9CA3AF" }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EarningsPhone() {
  return (
    <PhoneShell activeNav="earnings">
      <div style={{ display:"flex", alignItems:"center", padding:"14px 18px 12px", borderBottom:"1px solid #E5E7EB" }}>
        <span style={{ fontSize:18, fontWeight:900, color:"#0B0F14", letterSpacing:-0.5 }}>Earnings</span>
      </div>
      <div style={{ overflowY:"auto", maxHeight:520 }}>
        <div style={{ padding:"10px 16px", borderBottom:"1px solid #E5E7EB" }}>
          <div style={{ display:"flex", gap:2, padding:4, background:"#F5F7F9", borderRadius:9 }}>
            {["Day","Week","Month"].map((p,i)=>(
              <div key={p} style={{ flex:1, padding:"7px 0", borderRadius:7, fontSize:12, fontWeight:700, textAlign:"center",
                background:i===0?"#fff":"transparent", color:i===0?BRAND:"#9CA3AF",
                boxShadow:i===0?"0 1px 4px rgba(0,0,0,0.1)":"none",
              }}>{p}</div>
            ))}
          </div>
        </div>
        <div style={{ margin:"12px 16px", padding:"14px 16px", background:"#fff", border:"1px solid #E5E7EB", borderRadius:12, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div>
            <div style={{ fontSize:10, fontWeight:700, color:"#9CA3AF", textTransform:"uppercase", letterSpacing:0.5, marginBottom:4 }}>Available Balance</div>
            <div style={{ fontSize:24, fontWeight:900, color:"#0B0F14", letterSpacing:-0.5 }}>$1,847.50</div>
          </div>
          <span style={{ fontSize:12, fontWeight:700, color:BRAND }}>Transfer →</span>
        </div>
        <div style={{ margin:"0 16px 12px", padding:"20px", background:`linear-gradient(135deg, ${BRAND} 0%, ${BRAND_PRESSED} 100%)`, borderRadius:14, boxShadow:"0 8px 24px rgba(52,193,217,0.28)" }}>
          <div style={{ fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.85)", textTransform:"uppercase", letterSpacing:0.5, marginBottom:6 }}>Today&apos;s Earnings</div>
          <div style={{ fontSize:38, fontWeight:900, color:"#fff", letterSpacing:-1, marginBottom:10 }}>$265.00</div>
          <div style={{ display:"flex", justifyContent:"space-between", fontSize:12, color:"rgba(255,255,255,0.9)", fontWeight:600 }}>
            <span>6 appointments</span><span>+$45 vs yesterday</span>
          </div>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, padding:"0 16px 12px" }}>
          {[{v:"$45",l:"Avg/cut"},{v:"$38",l:"Tips"},{v:"1",l:"No-show"}].map((s,i)=>(
            <div key={i} style={{ background:"#F5F7F9", border:"1px solid #E5E7EB", borderRadius:10, padding:"12px 8px", textAlign:"center" }}>
              <div style={{ fontSize:20, fontWeight:900, color:"#0B0F14", letterSpacing:-0.5 }}>{s.v}</div>
              <div style={{ fontSize:9, fontWeight:700, color:"#9CA3AF", textTransform:"uppercase", letterSpacing:0.5, marginTop:3 }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div style={{ borderTop:"6px solid #F5F7F9", padding:"14px 16px 4px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", marginBottom:10 }}>
            <span style={{ fontSize:10, fontWeight:700, color:"#9CA3AF", textTransform:"uppercase", letterSpacing:0.5 }}>Recent</span>
            <span style={{ fontSize:11, fontWeight:700, color:BRAND }}>See all</span>
          </div>
          {[
            {c:"Marcus T.",s:"Fade · 10:00 AM",a:"+$45.00",t:"Tip: $8"},
            {c:"Kyle S.",s:"Haircut + Beard · 10:30 AM",a:"+$60.00",t:"Tip: $12"},
            {c:"Jordan K.",s:"Haircut · 2:00 PM",a:"+$35.00",t:"Tip: $7"},
            {c:"No-show fee",s:"Alex M. · 4:30 PM",a:"+$10.00",t:"Fee"},
          ].map((tx,i)=>(
            <div key={i} style={{ display:"flex", justifyContent:"space-between", padding:"11px 0", borderBottom:"1px solid #E5E7EB" }}>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:"#0B0F14" }}>{tx.c}</div>
                <div style={{ fontSize:10, color:"#9CA3AF", marginTop:2 }}>{tx.s}</div>
              </div>
              <div style={{ textAlign:"right" }}>
                <div style={{ fontSize:14, fontWeight:800, color:"#0B0F14" }}>{tx.a}</div>
                <div style={{ fontSize:10, fontWeight:700, color:BRAND, marginTop:2 }}>{tx.t}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PhoneShell>
  );
}

function CalendarPhone() {
  const [view, setView] = useState<"month" | "week" | "day">("month");
  const cycleRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const views: Array<"month" | "week" | "day"> = ["month", "week", "day"];
    let idx = 0;
    const tick = () => { idx = (idx + 1) % views.length; setView(views[idx]); cycleRef.current = setTimeout(tick, 3000); };
    cycleRef.current = setTimeout(tick, 3000);
    return () => { if (cycleRef.current) clearTimeout(cycleRef.current); };
  }, []);
  return (
    <PhoneShell activeNav="calendar">
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 18px 12px", borderBottom:"1px solid #E5E7EB" }}>
        <span style={{ fontSize:18, fontWeight:900, color:"#0B0F14", letterSpacing:-0.5 }}>Calendar</span>
        <span style={{ fontSize:22, color:BRAND, fontWeight:300 }}>+</span>
      </div>
      <div style={{ display:"flex", gap:2, padding:4, background:"#F3F4F6", margin:"10px 16px", borderRadius:9 }}>
        {(["month","week","day"] as const).map(v=>(
          <button key={v} onClick={()=>setView(v)} style={{ flex:1, padding:"7px 0", border:"none", borderRadius:7, fontSize:12, fontWeight:700, cursor:"pointer", background:view===v?"#fff":"transparent", color:view===v?BRAND:"#9CA3AF", boxShadow:view===v?"0 1px 4px rgba(0,0,0,0.1)":"none", transition:"all 0.2s" }}>
            {v.charAt(0).toUpperCase()+v.slice(1)}
          </button>
        ))}
      </div>
      {view==="month" && <MonthView />}
      {view==="week" && <WeekView />}
      {view==="day" && <DayView />}
    </PhoneShell>
  );
}

function MonthView() {
  const days = [
    {n:1,off:true,past:true},{n:2,off:true,past:true},{n:3,past:true},{n:4,past:true},{n:5,past:true},{n:6,past:true},{n:7,past:true},
    {n:8,off:true,past:true},{n:9,off:true,past:true},{n:10,past:true},{n:11,today:true,dot:true},
    {n:12,dot:true},{n:13,dot:true},{n:14,dot:true},
    {n:15,off:true},{n:16,off:true},{n:17,dot:true},{n:18,dot:true},{n:19},{n:20,dot:true},{n:21,dot:true},
    {n:22,off:true},{n:23,off:true},{n:24,dot:true},{n:25,dot:true},{n:26,dot:true},{n:27,dot:true},{n:28},
  ] as any[];
  return (
    <div style={{ paddingBottom:8 }}>
      <div style={{ display:"flex",alignItems:"center",justifyContent:"center",padding:"8px 16px",gap:14 }}>
        <span style={{color:"#4B5563",fontSize:20}}>‹</span>
        <span style={{fontSize:15,fontWeight:800,minWidth:120,textAlign:"center",letterSpacing:-0.3}}>February 2026</span>
        <span style={{color:"#4B5563",fontSize:20}}>›</span>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",padding:"0 14px 6px"}}>
        {["S","M","T","W","T","F","S"].map((d,i)=>(
          <div key={i} style={{textAlign:"center",fontSize:10,fontWeight:700,color:"#4B5563",padding:"3px 0"}}>{d}</div>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:2,padding:"0 14px"}}>
        {days.map((d:any,i:number)=>(
          <div key={i} style={{ aspectRatio:"1",borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center", background:d.today?BRAND:d.off?"#F3F4F6":"transparent", opacity:d.past?0.38:1 }}>
            <span style={{fontSize:12,fontWeight:700,color:d.today?"#fff":"#0B0F14"}}>{d.n}</span>
            {d.dot&&<div style={{width:3,height:3,borderRadius:"50%",background:d.today?"rgba(255,255,255,0.7)":BRAND,marginTop:2}}/>}
          </div>
        ))}
      </div>
      <div style={{padding:"12px 14px 0",borderTop:`6px solid ${GREY}`,marginTop:10}}>
        <div style={{fontSize:10,fontWeight:700,color:"#4B5563",textTransform:"uppercase",letterSpacing:0.5,marginBottom:8}}>Today · Feb 11</div>
        {[{time:"10:00 AM",client:"Marcus T.",service:"Haircut + Fade"},{time:"2:00 PM",client:"Jordan K.",service:"Haircut"}].map((a,i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"10px",border:"1px solid #E5E7EB",borderRadius:9,marginBottom:6}}>
            <span style={{fontSize:11,fontWeight:700,color:"#0B0F14",minWidth:52}}>{a.time}</span>
            <div style={{width:1,height:24,background:"#E5E7EB"}}/>
            <div>
              <div style={{fontSize:13,fontWeight:700,color:"#0B0F14"}}>{a.client}</div>
              <div style={{fontSize:11,color:"#4B5563",marginTop:1}}>{a.service}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WeekView() {
  const days = [{name:"S",num:9,off:true},{name:"M",num:10},{name:"T",num:11,today:true},{name:"W",num:12},{name:"T",num:13},{name:"F",num:14},{name:"S",num:15}] as any[];
  const slots = [
    {time:"9 AM",appts:[null,null,null,{c:"Alex R.",s:"Haircut"},null,null,null]},
    {time:"10 AM",appts:[null,null,{c:"Marcus T.",s:"Fade"},null,null,null,{c:"Tyler B.",s:"Haircut"}]},
    {time:"11 AM",appts:[null,null,null,null,null,{c:"Sam W.",s:"Haircut"},null]},
    {time:"12 PM",appts:[null,null,null,{c:"Owen T.",s:"Fade"},null,null,null]},
    {time:"2 PM",appts:[null,null,null,{c:"Jordan K.",s:"Haircut"},null,null,null]},
    {time:"3 PM",appts:[null,null,{c:"Kevin R.",s:"Fade"},null,{c:"Mike P.",s:"Haircut"},null,null]},
  ];
  return (
    <div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"8px 16px",gap:14}}>
        <span style={{color:"#4B5563",fontSize:20}}>‹</span>
        <span style={{fontSize:14,fontWeight:700}}>Feb 9 – 15</span>
        <span style={{color:"#4B5563",fontSize:20}}>›</span>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",borderBottom:"1px solid #E5E7EB",padding:"0 4px"}}>
        {days.map((d:any,i:number)=>(
          <div key={i} style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 0",borderBottom:d.today?`2px solid ${BRAND}`:"2px solid transparent"}}>
            <span style={{fontSize:9,fontWeight:700,color:"#4B5563",textTransform:"uppercase"}}>{d.name}</span>
            <span style={{fontSize:15,fontWeight:800,color:d.today?BRAND:d.off?"#E5E7EB":"#0B0F14",marginTop:2}}>{d.num}</span>
          </div>
        ))}
      </div>
      <div style={{overflowY:"auto",maxHeight:320}}>
        <div style={{display:"grid",gridTemplateColumns:"38px repeat(7,1fr)"}}>
          {slots.map((row,ri)=>(
            <>{[
              <div key={`t${ri}`} style={{fontSize:9,fontWeight:600,color:"#4B5563",padding:"4px 4px 0 8px",height:54,borderTop:"1px solid #E5E7EB",display:"flex",alignItems:"flex-start"}}>{row.time}</div>,
              ...row.appts.map((a:any,ci:number)=>(
                <div key={`s${ri}-${ci}`} style={{height:54,borderLeft:"1px solid #E5E7EB",borderTop:"1px solid #E5E7EB",background:a?BRAND:ci===0?"#F3F4F6":"#fff",padding:a?"6px 5px":0}}>
                  {a&&<><div style={{fontSize:9,fontWeight:800,color:"#fff",lineHeight:1.2}}>{a.c}</div><div style={{fontSize:8,color:"rgba(255,255,255,0.85)",marginTop:2}}>{a.s}</div></>}
                </div>
              ))
            ]}</>
          ))}
        </div>
      </div>
    </div>
  );
}

function DayView() {
  const appts = [
    {time:"10:00 AM",client:"Marcus T.",service:"Fade",price:"$45",booked:true},
    {time:"10:30 AM",client:"Kyle S.",service:"Haircut + Beard",price:"$60",booked:true},
    {time:"11:00 AM",booked:false},
    {time:"11:30 AM",now:true,booked:false},
    {time:"12:00 PM",booked:false},
    {time:"12:30 PM",client:"John R.",service:"Lineup",price:"$20",booked:true},
    {time:"2:00 PM",client:"Jordan K.",service:"Haircut",price:"$35",booked:true},
    {time:"3:00 PM",client:"Kevin R.",service:"Fade",price:"$40",booked:true},
    {time:"4:00 PM",booked:false},
  ] as any[];
  return (
    <div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"8px 16px",gap:14}}>
        <span style={{color:"#4B5563",fontSize:20}}>‹</span>
        <span style={{fontSize:14,fontWeight:700}}>Tuesday, Feb 11</span>
        <span style={{color:"#4B5563",fontSize:20}}>›</span>
      </div>
      <div style={{textAlign:"center",fontSize:11,color:"#4B5563",paddingBottom:10,borderBottom:"1px solid #E5E7EB"}}>
        Working <strong style={{color:"#0B0F14"}}>10:00 AM – 6:00 PM</strong>
      </div>
      <div style={{padding:"10px 14px",overflowY:"auto",maxHeight:360}}>
        {appts.map((a:any,i:number)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:8,marginBottom:5}}>
            <span style={{fontSize:10,fontWeight:700,color:a.now?"#FF3B30":"#9CA3AF",minWidth:60,textAlign:"right"}}>{a.time}</span>
            <div style={{flex:1,height:50,borderRadius:9,display:"flex",alignItems:"center",padding:"0 12px",position:"relative",overflow:"hidden",
              background:a.booked?BRAND:a.now?"#FFF5F5":"#fff",
              border:`1.5px solid ${a.booked?BRAND:a.now?"#FF3B30":"#E5E7EB"}`,
            }}>
              {a.booked&&<div style={{position:"absolute",left:0,top:0,bottom:0,width:3,background:BRAND_PRESSED}}/>}
              {a.booked?<>
                <span style={{fontSize:13,fontWeight:800,color:"#fff",marginLeft:6}}>{a.client}</span>
                <span style={{fontSize:10,color:"rgba(255,255,255,0.85)",marginLeft:6}}>{a.service}</span>
                <span style={{fontSize:13,fontWeight:800,color:"#fff",marginLeft:"auto"}}>{a.price}</span>
              </>:a.now?<span style={{fontSize:11,fontWeight:800,color:"#FF3B30"}}>Now</span>
              :<span style={{fontSize:11,color:"#9CA3AF"}}>Available</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


// ─── Animated client booking demo ─────────────────────────────────────────────
function ClientBookingDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const stepDurations = [2000, 2000, 2500, 2500];
    let current = 0;
    let timer: ReturnType<typeof setTimeout>;
    const advance = () => {
      current = (current + 1) % 5;
      setStep(current);
      const next = current === 4 ? 2000 : stepDurations[current] ?? 2000;
      timer = setTimeout(advance, next);
    };
    timer = setTimeout(advance, stepDurations[0]);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    { name: "Haircut", duration: "45 min", price: "$45" },
    { name: "Haircut + Facial Hair", duration: "60 min", price: "$50" },
    { name: "Lineup", duration: "20 min", price: "$15" },
  ];

  const SH2: React.CSSProperties = { fontSize:"clamp(30px, 4vw, 48px)", fontWeight:900, letterSpacing:-1.5, marginBottom:20, lineHeight:1.05 };

  return (
    <section style={{ padding:"120px 40px", background:"#0B0F14" }}>
      <div style={{ maxWidth:900, margin:"0 auto", display:"flex", gap:80, alignItems:"center", flexWrap:"wrap", justifyContent:"center" }}>
        <div style={{ flex:1, minWidth:260, maxWidth:380 }}>
          <h2 style={SH2}>What your clients now see.</h2>
          <p style={{ color:"#8B95A1", fontSize:17, lineHeight:1.7 }}>
            Seamless booking — from link to confirmation.
          </p>
        </div>

        {/* Phone */}
        <div style={{ width:300, background:"#fff", borderRadius:44, flexShrink:0,
          boxShadow:"0 0 0 11px #1a1a1a, 0 0 0 13px #2a2a2a, 0 40px 100px rgba(0,0,0,0.5)",
          overflow:"hidden" }}>

          {/* Status bar */}
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 20px 0", position:"relative" }}>
            <span style={{ fontSize:14, fontWeight:800, color:"#0B0F14" }}>9:41</span>
            <div style={{ width:100, height:24, background:"#111", borderRadius:20, position:"absolute", left:"50%", transform:"translateX(-50%)", top:0 }} />
            <span style={{ fontSize:11, fontWeight:600, color:"#0B0F14" }}>●●● 100%</span>
          </div>

          {/* Step indicator */}
          <div style={{ display:"flex", alignItems:"center", padding:"10px 22px 8px", gap:6 }}>
            {[0,1,2,3].map(i => {
              const isActive = step === i || (i === 3 && step >= 3);
              const isPast = step > i && !(i === 3 && step >= 3);
              return (
                <div key={i} style={{ display:"flex", alignItems:"center", flex: i < 3 ? 1 : "none" }}>
                  <div style={{
                    width: isActive ? 8 : 6, height: isActive ? 8 : 6, borderRadius:"50%", flexShrink:0,
                    background: isActive ? BRAND : isPast ? BRAND : "#D1D5DB",
                    transition:"all 0.3s",
                  }} />
                  {i < 3 && (
                    <div style={{ flex:1, height:1.5, background: isPast ? BRAND : "#E5E7EB", margin:"0 6px", transition:"background 0.4s", borderRadius:2 }} />
                  )}
                </div>
              );
            })}
          </div>


          {/* Fixed height screen area */}
          <div style={{ height: 480, overflow: "hidden", position: "relative" }}>

          {/* STEP 0: Service */}
          {step === 0 && (
            <div style={{ padding:"28px 18px 16px", height:"100%", display:"flex", flexDirection:"column", boxSizing:"border-box" }}>
              <div style={{ fontSize:17, fontWeight:900, letterSpacing:-0.5, color:"#0B0F14", marginBottom:14 }}>Select a service</div>
              <div style={{ flex:1 }}>
                {services.map((s,i)=>(
                  <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 14px", borderRadius:11, marginBottom:8,
                    border:`2px solid ${i===0?BRAND:"#E5E7EB"}`, background:i===0?BRAND_LIGHT:"#fff" }}>
                    <div>
                      <div style={{ fontSize:14, fontWeight:800, color:i===0?BRAND_PRESSED:"#0B0F14" }}>{s.name}</div>
                      <div style={{ fontSize:11, color:"#9CA3AF", marginTop:2 }}>{s.duration}</div>
                    </div>
                    <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                      <span style={{ fontSize:14, fontWeight:800, color:i===0?BRAND:"#0B0F14" }}>{s.price}</span>
                      {i===0 && <div style={{ width:18, height:18, borderRadius:"50%", background:BRAND, display:"flex", alignItems:"center", justifyContent:"center" }}><span style={{ fontSize:10, color:"#fff" }}>✓</span></div>}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ padding:"15px", background:BRAND, borderRadius:11, textAlign:"center", fontSize:14, fontWeight:800, color:"#fff", boxShadow:"0 4px 14px rgba(52,193,217,0.28)" }}>Continue →</div>
            </div>
          )}

          {/* STEP 1: Date & Time */}
          {step === 1 && (
            <div style={{ padding:"28px 18px 16px", height:"100%", display:"flex", flexDirection:"column", boxSizing:"border-box" }}>
              <div style={{ fontSize:17, fontWeight:900, letterSpacing:-0.5, color:"#0B0F14", marginBottom:4 }}>Pick a date & time</div>
              <div style={{ fontSize:12, color:"#9CA3AF", marginBottom:12 }}>Haircut · 45 min</div>
              <div style={{ display:"flex", gap:5, marginBottom:14 }}>
                {[{d:"Sun",n:8,off:true},{d:"Mon",n:9,past:true},{d:"Tue",n:10,past:true},{d:"Wed",n:11,today:true,sel:true},{d:"Thu",n:12},{d:"Fri",n:13},{d:"Sat",n:14,off:true}].map((d,i)=>(
                  <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", padding:"8px 0", borderRadius:9,
                    background:d.sel?BRAND:d.today?BRAND_LIGHT:"#fff",
                    border:`1.5px solid ${d.sel?BRAND:d.today?BRAND:"#E5E7EB"}`,
                    opacity:d.off||d.past?0.3:1 }}>
                    <span style={{ fontSize:8, fontWeight:700, color:d.sel?"rgba(255,255,255,0.8)":"#9CA3AF", textTransform:"uppercase" }}>{d.d}</span>
                    <span style={{ fontSize:13, fontWeight:800, color:d.sel?"#fff":d.today?BRAND:"#0B0F14", marginTop:2 }}>{d.n}</span>
                  </div>
                ))}
              </div>
              <div style={{ fontSize:11, fontWeight:700, color:"#9CA3AF", textTransform:"uppercase", letterSpacing:0.5, marginBottom:10 }}>Available times</div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:7, flex:1, alignContent:"start" }}>
                {["9:00 AM","10:00 AM","11:30 AM","1:00 PM","2:30 PM","4:00 PM"].map((t,i)=>(
                  <div key={i} style={{ padding:"12px 0", textAlign:"center", borderRadius:9, fontSize:12, fontWeight:700,
                    background:i===1?BRAND:"#fff", border:`1.5px solid ${i===1?BRAND:"#E5E7EB"}`, color:i===1?"#fff":"#0B0F14" }}>{t}</div>
                ))}
              </div>
              <div style={{ padding:"15px", background:BRAND, borderRadius:11, textAlign:"center", fontSize:14, fontWeight:800, color:"#fff", boxShadow:"0 4px 14px rgba(52,193,217,0.28)", marginTop:14 }}>Continue →</div>
            </div>
          )}

          {/* STEP 2: Payment */}
          {step === 2 && (
            <div style={{ padding:"28px 18px 16px", height:"100%", display:"flex", flexDirection:"column", boxSizing:"border-box" }}>
              <div style={{ fontSize:17, fontWeight:900, letterSpacing:-0.5, color:"#0B0F14", marginBottom:4 }}>Review & confirm</div>
              <div style={{ fontSize:12, color:"#9CA3AF", marginBottom:12 }}>Charged after your appointment.</div>
              <div style={{ flex:1 }}>
                <div style={{ border:"1.5px solid #E5E7EB", borderRadius:11, padding:"12px 14px", marginBottom:10, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                    <div style={{ width:36, height:24, background:"linear-gradient(135deg, #1a1a2e, #16213e)", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <div style={{ width:20, height:13, background:"linear-gradient(135deg, #f59e0b, #d97706)", borderRadius:3 }} />
                    </div>
                    <div>
                      <div style={{ fontSize:13, fontWeight:800, color:"#0B0F14", letterSpacing:0.5 }}>•••• 4242</div>
                      <div style={{ fontSize:10, color:"#9CA3AF", marginTop:1 }}>Visa · Expires 09/27</div>
                    </div>
                  </div>
                  <span style={{ fontSize:11, fontWeight:700, color:BRAND }}>Switch</span>
                </div>
                <div style={{ background:"#F7F6F3", borderRadius:11, padding:"12px 14px" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", padding:"6px 0", borderBottom:"1px solid #E5E7EB" }}>
                    <span style={{ fontSize:12, color:"#6B7280", fontWeight:600 }}>Haircut</span>
                    <span style={{ fontSize:12, fontWeight:700, color:"#0B0F14" }}>$45.00</span>
                  </div>
                  <div style={{ display:"flex", justifyContent:"space-between", padding:"6px 0", borderBottom:"1px solid #E5E7EB" }}>
                    <span style={{ fontSize:12, color:"#6B7280", fontWeight:600 }}>Tip (10%)</span>
                    <span style={{ fontSize:12, fontWeight:700, color:"#0B0F14" }}>$4.50</span>
                  </div>
                  <div style={{ display:"flex", justifyContent:"space-between", padding:"6px 0", borderBottom:"1px solid #E5E7EB" }}>
                    <span style={{ fontSize:11, color:"#9CA3AF" }}>Booking fee</span>
                    <span style={{ fontSize:11, color:"#9CA3AF" }}>$2.36</span>
                  </div>
                  <div style={{ display:"flex", justifyContent:"space-between", paddingTop:8 }}>
                    <span style={{ fontSize:13, fontWeight:800, color:"#0B0F14" }}>Total</span>
                    <span style={{ fontSize:15, fontWeight:900, color:BRAND }}>$51.86</span>
                  </div>
                </div>
              </div>
              <div style={{ padding:"15px", background:BRAND, borderRadius:11, textAlign:"center", fontSize:14, fontWeight:800, color:"#fff", boxShadow:"0 4px 14px rgba(52,193,217,0.28)", marginTop:14 }}>Confirm Booking →</div>
            </div>
          )}

          {/* STEP 3+: Confirmed */}
          {step >= 3 && (
            <div style={{ height:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding:"20px 18px" }}>
              <div style={{ width:72, height:72, borderRadius:"50%", background:`linear-gradient(135deg, ${BRAND}, ${BRAND_PRESSED})`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:20, boxShadow:"0 8px 32px rgba(52,193,217,0.35)" }}>
                <span style={{ fontSize:32, color:"#fff" }}>✓</span>
              </div>
              <div style={{ fontSize:22, fontWeight:900, color:"#0B0F14", letterSpacing:-0.5, marginBottom:10 }}>You&apos;re booked!</div>
              <div style={{ fontSize:14, color:"#9CA3AF", lineHeight:1.6 }}>Confirmation sent to your phone.</div>
            </div>
          )}

          </div>{/* end fixed height wrapper */}

        </div>
      </div>
    </section>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function LandingPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [finalEmail, setFinalEmail] = useState("");
  const [finalSubmitted, setFinalSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const slug = username.toLowerCase().replace(/[^a-z0-9_]/g, "");
  const handleClaim = (e: React.FormEvent) => { e.preventDefault(); if (slug) setModalOpen(true); };
  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); if (!email) return;
    setLoading(true); await new Promise(r => setTimeout(r, 800)); setSubmitted(true); setLoading(false);
  };
  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); if (!finalEmail) return;
    setLoading(true); await new Promise(r => setTimeout(r, 800)); setFinalSubmitted(true); setLoading(false);
  };

  const SH: React.CSSProperties = { fontSize:"clamp(30px, 4vw, 48px)", fontWeight:900, letterSpacing:-1.5, marginBottom:20, lineHeight:1.05 };

  return (
    <div style={{ fontFamily:"'SF Pro Display', -apple-system, BlinkMacSystemFont, system-ui, sans-serif", color:"#F0F4F8", background:"#0B0F14" }}>

      {/* NAV */}
      <nav style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 48px", height:70, borderBottom:"1px solid #E5E7EB", position:"sticky", top:0, background:"rgba(11,15,20,0.96)", backdropFilter:"blur(16px)", zIndex:100 }}>
        <div style={{ display:"flex", alignItems:"center", gap:9 }}>
          <ScissorLogo size={26} />
          <span style={{ fontSize:19, fontWeight:800, letterSpacing:-0.5, color:"#F0F4F8" }}>instabrbr</span>
        </div>
        <a href="#claim" style={{ background:BRAND, color:"#fff", padding:"9px 22px", borderRadius:100, fontSize:14, fontWeight:700, textDecoration:"none" }}>Claim Your Link</a>
      </nav>

      {/* ── SECTION 1: HERO ───────────────────────────────────────────────── */}
      <section id="claim" style={{ minHeight:"92vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding:"40px 20px 60px" }}>

        <h1 style={{ fontSize:"clamp(44px, 7vw, 80px)", fontWeight:900, letterSpacing:-3, lineHeight:0.97, marginBottom:20, maxWidth:800 }}>
          Stop losing money<br />to no-shows.
        </h1>
        <p style={{ fontSize:"clamp(18px, 2.5vw, 22px)", color:"#8B95A1", marginBottom:48 }}>
          Turn DMs into confirmed, paid bookings.
        </p>

        {/* Input */}
        <form onSubmit={handleClaim} style={{ width:"100%", maxWidth:520, boxSizing:"border-box" }}>
          <div style={{ textAlign:"left", marginBottom:8 }}>
            <span style={{ fontSize:13, fontWeight:600, color:"#8B95A1" }}>Claim your booking link</span>
          </div>
          <div style={{ display:"flex", alignItems:"stretch", border:`1.5px solid ${slug ? BRAND : "rgba(255,255,255,0.10)"}`, borderRadius:14, boxShadow:slug?`0 0 0 4px rgba(52,193,217,0.10)`:"0 1px 4px rgba(0,0,0,0.06)", transition:"all 0.2s", background:"#0B0F14", overflow:"hidden" }}>
            <div style={{ padding:"0 10px", display:"flex", alignItems:"center", background:"#141920", borderRight:`1.5px solid ${slug?BRAND:"rgba(255,255,255,0.10)"}`, fontSize:13, fontWeight:700, color:BRAND, whiteSpace:"nowrap", transition:"border-color 0.2s", borderRadius:"12px 0 0 12px", flexShrink:0 }}>
              instabrbr.com/
            </div>
            <input
              value={username} onChange={e=>setUsername(e.target.value)}
              placeholder="yourname" autoComplete="off"
              style={{ flex:1, border:"none", outline:"none", fontSize:16, fontWeight:700, color:"#F0F4F8", background:"#0B0F14", padding:"16px 12px", fontFamily:"inherit", caretColor:BRAND, borderRadius:"0 12px 12px 0", minWidth:0 }}
            />
          </div>
          <div style={{ height:28, display:"flex", alignItems:"center", paddingLeft:2, marginBottom:8 }}>
            {slug && (
              <span style={{ fontSize:13, fontWeight:700 }}><span style={{ color:BRAND }}>✓ instabrbr.com/{slug}</span><span style={{ color:"#F0F4F8" }}> is available</span></span>
            )}
          </div>
          <button type="submit" style={{ width:"100%", padding:"18px", background:slug?BRAND:"#E5E7EB", color:slug?"#fff":"#9CA3AF", border:"none", borderRadius:12, fontSize:16, fontWeight:800, cursor:slug?"pointer":"default", transition:"all 0.2s", letterSpacing:-0.3, boxShadow:slug?"0 4px 14px rgba(52,193,217,0.28)":"none" }}>
            Reserve My Link →
          </button>
          <p style={{ fontSize:13, fontWeight:600, color:"#F0F4F8", marginTop:14 }}>Secure your link before launch — early access is limited.</p>
        </form>
      </section>

      {/* ── SECTION 2: THE PROBLEM ────────────────────────────────────────── */}
      <section style={{ padding:"120px 24px", background:"#141920" }}>
        <div style={{ maxWidth:640, margin:"0 auto", textAlign:"center" }}>
          <h2 style={{ fontSize:"clamp(32px, 5vw, 56px)", fontWeight:900, letterSpacing:-1.5, marginBottom:56, lineHeight:1.05 }}>
            Still booking<br />through DMs?
          </h2>
          <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
            {[
              "Scheduling chaos.",
              "Clients ghosting you.",
              "Unpredictable income.",
            ].map((line, i) => (
              <div key={i} style={{ padding:"36px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <p style={{ fontSize:"clamp(22px, 3.5vw, 34px)", fontWeight:800, color:"#F0F4F8", letterSpacing:-0.5, margin:0 }}>
                  {line}
                </p>
              </div>
            ))}
          </div>
          <p style={{ fontSize:17, color:"#8B95A1", marginTop:48, lineHeight:1.7 }}>
            You shouldn&apos;t run your business from your inbox.
          </p>
        </div>
      </section>

      {/* ── WHAT YOUR CLIENTS SEE ─────────────────────────────────────── */}
      <ClientBookingDemo />

      {/* ── SECTION 4: CORE SYSTEM ────────────────────────────────────────── */}
      <section style={{ padding:"120px 40px", background:"#141920" }}>
        <div style={{ maxWidth:900, margin:"0 auto" }}>
          <h2 style={{ ...SH, marginBottom:52 }}>Run your chair like a business.</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))", gap:16 }}>
            {([
              { icon:"shield", title:"Automatic payment protection", desc:"Card on file at booking. No more lost revenue." },
              { icon:"tip",    title:"Built-in digital tipping",     desc:"Clients tip easily after the cut." },
              { icon:"policy", title:"Set your own policies",        desc:"Cancellation windows, no-show fees, blocked times. Your chair. Your rules." },
            ] as {icon:string;title:string;desc:string}[]).map((f,i)=>(
              <div key={i} style={{ background:"#141920", border:"1.5px solid rgba(52,193,217,0.2)", borderRadius:14, padding:"28px 24px" }}>
                <div style={{ marginBottom:14 }}>
                  {f.icon === "shield" && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={BRAND} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  )}
                  {f.icon === "tip" && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={BRAND} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23"/>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  )}
                  {f.icon === "policy" && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={BRAND} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                    </svg>
                  )}
                </div>
                <div style={{ fontSize:16, fontWeight:800, marginBottom:8, letterSpacing:-0.3 }}>{f.title}</div>
                <div style={{ fontSize:14, color:"#8B95A1", lineHeight:1.7 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── SECTION 3: EARNINGS ───────────────────────────────────────────── */}
      <section style={{ padding:"120px 40px", background:"#0B0F14" }}>
        <div style={{ maxWidth:680, margin:"0 auto", textAlign:"center" }}>
          <h2 style={{ ...SH, marginBottom:12 }}>Track every dollar you make.</h2>
          <p style={{ color:"#8B95A1", fontSize:18, lineHeight:1.7, marginBottom:60 }}>Real-time earnings, tips, and insights.</p>
          <div style={{ display:"flex", justifyContent:"center" }}>
            <EarningsPhone />
          </div>
        </div>
      </section>

      {/* ── SECTION 5: YOUR LINK ──────────────────────────────────────────── */}
      <section style={{ padding:"120px 40px", background:"#141920" }}>
        <div style={{ maxWidth:900, margin:"0 auto", display:"flex", gap:80, alignItems:"center", flexWrap:"wrap" }}>
          <div style={{ flex:1, minWidth:280 }}>
            <h2 style={SH}>Your booking link. Your brand.</h2>
            <p style={{ color:"#8B95A1", fontSize:18, lineHeight:1.7, marginBottom:0 }}>
              One link. Share it anywhere.
            </p>
          </div>
          <div style={{ flex:1, minWidth:240, background:"#141920", border:"1.5px solid rgba(52,193,217,0.35)", borderRadius:18, padding:"28px 26px" }}>
            <div style={{ fontSize:13, fontWeight:700, color:"#F0F4F8", marginBottom:8 }}>What your clients see</div>
            <div style={{ fontSize:17, fontWeight:800, color:BRAND, marginBottom:4 }}>instabrbr.com/<span style={{ color:"#F0F4F8" }}>yourname</span></div>
            <div style={{ height:1, background:"rgba(255,255,255,0.08)", margin:"18px 0" }} />
            {["Your services","Your availability","Your prices","Your policies"].map((item,i)=>(
              <div key={i} style={{ display:"flex", alignItems:"center", gap:10, padding:"9px 0", borderBottom:i<3?"1px solid #E5E7EB":"none" }}>
                <div style={{ width:18, height:18, borderRadius:"50%", background:"rgba(52,193,217,0.15)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <span style={{ fontSize:10, color:BRAND }}>✓</span>
                </div>
                <span style={{ fontSize:14, fontWeight:600, color:"#F0F4F8" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── SECTION 6: CALENDAR ───────────────────────────────────────────── */}
      <section style={{ padding:"120px 40px", background:"#0B0F14" }}>
        <div style={{ maxWidth:680, margin:"0 auto", textAlign:"center" }}>
          <h2 style={{ ...SH, marginBottom:12 }}>All your bookings in one place.</h2>
          <p style={{ color:"#8B95A1", fontSize:18, lineHeight:1.7, marginBottom:60 }}>Know your day before it starts.</p>
          <div style={{ display:"flex", justifyContent:"center" }}>
            <CalendarPhone />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section style={{ padding:"120px 24px", background:"#141920", textAlign:"center" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, marginBottom:24 }}>
          <ScissorLogo size={30} />
          <span style={{ fontSize:20, fontWeight:800, letterSpacing:-0.5 }}>instabrbr</span>
        </div>
        <h2 style={{ fontSize:"clamp(34px, 5vw, 60px)", fontWeight:900, letterSpacing:-2, marginBottom:16, lineHeight:1.0 }}>
          Be one of the first barbers<br />on Instabrbr.
        </h2>
        <p style={{ color:"#8B95A1", fontSize:18, marginBottom:44 }}>Level up your booking.</p>

        {finalSubmitted ? (
          <div style={{ background:"#141920", border:"1px solid #E5E7EB", borderRadius:16, padding:"28px 36px", maxWidth:380, margin:"0 auto" }}>
            <div style={{ fontSize:36, marginBottom:12 }}>✂️</div>
            <div style={{ fontSize:20, fontWeight:800, marginBottom:8 }}>You&apos;re on the list.</div>
            <div style={{ color:"#8B95A1" }}>We&apos;ll reach out before launch.</div>
          </div>
        ) : (
          <form onSubmit={handleFinalSubmit} style={{ display:"flex", gap:10, maxWidth:440, margin:"0 auto", flexWrap:"wrap", justifyContent:"center" }}>
            <input type="email" value={finalEmail} onChange={e=>setFinalEmail(e.target.value)} placeholder="you@barbershop.com" required
              style={{ flex:1, minWidth:220, padding:"14px 18px", background:"#0B0F14", border:"1.5px solid rgba(255,255,255,0.08)", borderRadius:10, fontSize:15, color:"#F0F4F8", outline:"none", fontFamily:"inherit" }}
            />
            <button type="submit" style={{ padding:"14px 26px", background:BRAND, color:"#fff", border:"none", borderRadius:10, fontSize:15, fontWeight:800, cursor:"pointer", whiteSpace:"nowrap", boxShadow:"0 4px 14px rgba(52,193,217,0.35)" }}>
              {loading ? "..." : "Reserve My Link"}
            </button>
          </form>
        )}
      </section>

      {/* FOOTER */}
      <footer style={{ padding:"24px 40px", borderTop:"1px solid #E5E7EB", background:"#0B0F14", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:14 }}>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <ScissorLogo size={20} />
          <span style={{ fontWeight:800, fontSize:15 }}>instabrbr</span>
        </div>
        <span style={{ color:"#4B5563", fontSize:13 }}>© 2026 Instabrbr Inc. All rights reserved.</span>
        <div style={{ display:"flex", gap:20 }}>
          <a href="#" style={{ color:"#4B5563", fontSize:13, textDecoration:"none" }}>Terms</a>
          <a href="#" style={{ color:"#4B5563", fontSize:13, textDecoration:"none" }}>Privacy</a>
        </div>
      </footer>

      {/* MODAL */}
      {modalOpen && (
        <div onClick={(e)=>{ if(e.target===e.currentTarget) setModalOpen(false); }} style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", backdropFilter:"blur(12px)", WebkitBackdropFilter:"blur(12px)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:999, padding:24 }}>
          <div style={{ background:"#141920", borderRadius:20, padding:"36px 32px", maxWidth:420, width:"100%", boxShadow:"0 32px 80px rgba(0,0,0,0.15)" }}>
            {submitted ? (
              <div style={{ textAlign:"center" }}>
                <div style={{ fontSize:48, marginBottom:16 }}>✂️</div>
                <h3 style={{ fontSize:22, fontWeight:900, marginBottom:10 }}>Link reserved!</h3>
                <p style={{ color:"#8B95A1", marginBottom:8 }}><strong style={{ color:BRAND }}>instabrbr.com/{slug}</strong> is yours.</p>
                <p style={{ color:"#4B5563", fontSize:14 }}>We&apos;ll email you right before launch.</p>
                <button onClick={()=>{ setModalOpen(false); setSubmitted(false); setEmail(""); setUsername(""); window.scrollTo({ top:0, behavior:"smooth" }); }} style={{ marginTop:24, padding:"12px 32px", background:BRAND, color:"#fff", border:"none", borderRadius:10, fontSize:15, fontWeight:700, cursor:"pointer" }}>Done</button>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize:22, fontWeight:900, marginBottom:8, letterSpacing:-0.5 }}>Reserve your link</h3>
                <p style={{ color:"#8B95A1", fontSize:15, marginBottom:24 }}>
                  Enter your email to lock in <strong style={{ color:BRAND }}>instabrbr.com/{slug}</strong> before launch.
                </p>
                <form onSubmit={handleModalSubmit}>
                  <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="your@email.com" required
                    style={{ width:"100%", padding:"14px 16px", background:"#0B0F14", color:"#F0F4F8", border:"1.5px solid rgba(255,255,255,0.08)", borderRadius:10, fontSize:15, outline:"none", marginBottom:12, boxSizing:"border-box", fontFamily:"inherit" }}
                  />
                  <button type="submit" style={{ width:"100%", padding:"14px", background:BRAND, color:"#fff", border:"none", borderRadius:10, fontSize:15, fontWeight:800, cursor:"pointer", boxShadow:"0 4px 14px rgba(52,193,217,0.3)" }}>
                    {loading ? "Reserving..." : "Reserve My Link →"}
                  </button>
                </form>
                <button onClick={()=>setModalOpen(false)} style={{ marginTop:10, width:"100%", padding:"10px", background:"transparent", color:"#4B5563", border:"none", fontSize:14, cursor:"pointer" }}>Cancel</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}