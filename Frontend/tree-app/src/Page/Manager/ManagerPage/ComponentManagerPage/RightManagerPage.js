import React from 'react'
import { AreaChart , Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area } from 'recharts';

import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-router-dom';

export default function RightManagerPage() {
    const data = [
        { name: ' 1', uv: 300, pv: 300 },
        { name: ' 2', uv: 200, pv: 200 },
        { name: ' 3', uv: 600, pv: 600 },
        { name: ' 4', uv: 400, pv: 400 },
        { name: ' 5', uv: 500, pv: 500 },
      ];
    return(
    <div className="col-span-1">
             <div className="flex justify-start h-40 w-full bg-primary rounded-xl">
                <div className="w-1/2 text-white p-5 m-0">
                    <h1 className="font-bold font-popping uppercase">My Stat</h1>
                    <div className="uppercase text-[10px]">
                        <p className="text-[10px] text-white">TODAY: 4 Order</p>
                        <p className="text-[10px] text-white">Month: 4 Order</p>
                    </div>
                    <Link to={'/manager/order'} className="font-bold font-popping text-[14px] flex items-center">Go to Order <AiOutlineArrowRight className="ml-1"/></Link>
                </div>
                <img src="https://png.pngtree.com/png-clipart/20230209/original/pngtree-banyan-tree-png-image_8948930.png"/>
             </div>
             <div className='w-full m-5'>
             <AreaChart width={300} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                     
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="10%" stopColor="#245953" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#245953" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    {/* <YAxis /> */}
                    <XAxis dataKey="name" />
                   
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="pv" stroke="#245953" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
             </div>
        </div>
  )
}
