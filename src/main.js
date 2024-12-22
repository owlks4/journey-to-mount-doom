import './style.css'
import 'leaflet'
import "leaflet-providers";
import mapImage from '../public/map.webp'; 

let FRODO_AND_SAM_PATH = [[1484.00, 1162.00], [1492.00, 1176.00], [1492.00, 1176.00], [1492.00, 1176.00], [1502.00, 1184.00], [1502.00, 1184.00], [1502.00, 1184.00], [1511.00, 1195.00], [1511.00, 1195.00], 
[1511.00, 1195.00], [1532.00, 1207.00], [1532.00, 1207.00], [1532.00, 1207.00], [1554.00, 1217.00], [1554.00, 1217.00], [1554.00, 1217.00], [1574.00, 1220.00], [1574.00, 1220.00], 
[1574.00, 1220.00], [1588.00, 1221.00], [1588.00, 1221.00], [1588.00, 1221.00], [1597.00, 1213.00], [1597.00, 1213.00], [1597.00, 1213.00], [1608.00, 1208.00], [1608.00, 1208.00], 
[1608.00, 1208.00], [1618.00, 1208.00], [1618.00, 1208.00], [1618.00, 1208.00], [1639.00, 1208.00], [1639.00, 1208.00], [1639.00, 1208.00], [1652.00, 1207.00], [1652.00, 1207.00], 
[1652.00, 1207.00], [1659.00, 1204.00], [1661.00, 1204.00], [1663.00, 1204.00], [1682.00, 1201.00], [1683.00, 1201.00], [1684.00, 1201.00], [1692.00, 1199.00], [1693.00, 1199.00], 
[1694.00, 1199.00], [1704.00, 1201.00], [1704.00, 1201.00], [1704.00, 1201.00], [1716.00, 1200.00], [1717.00, 1200.00], [1718.00, 1200.00], [1744.00, 1201.00], [1744.00, 1201.00], 
[1744.00, 1201.00], [1757.00, 1202.00], [1757.00, 1202.00], [1757.00, 1202.00], [1772.00, 1209.00], [1772.00, 1209.00], [1772.00, 1209.00], [1786.00, 1215.00], [1786.00, 1215.00], 
[1786.00, 1215.00], [1781.00, 1200.00], [1781.00, 1200.00], [1781.00, 1200.00], [1780.00, 1187.00], [1780.00, 1187.00], [1780.00, 1187.00], [1773.00, 1176.00], [1776.00, 1174.00], 
[1779.00, 1172.00], [1792.00, 1160.00], [1792.00, 1160.00], [1792.00, 1160.00], [1800.00, 1150.00], [1802.00, 1149.00], [1804.00, 1148.00], [1818.00, 1134.00], [1818.00, 1134.00], 
[1818.00, 1134.00], [1830.00, 1129.00], [1839.00, 1129.00], [1848.00, 1129.00], [1879.00, 1132.00], [1879.00, 1132.00], [1879.00, 1132.00], [1900.00, 1132.00], [1901.00, 1132.00], 
[1902.00, 1132.00], [1951.00, 1133.00], [1951.00, 1133.00], [1951.00, 1133.00], [1965.00, 1137.00], [1965.00, 1137.00], [1965.00, 1137.00], [1978.00, 1145.00], [1978.00, 1145.00], 
[1978.00, 1145.00], [1999.00, 1151.00], [1999.00, 1151.00], [1999.00, 1151.00], [1999.00, 1169.00], [1999.00, 1169.00], [1999.00, 1169.00], [1999.00, 1178.00], [2000.00, 1180.00], 
[2001.00, 1182.00], [2006.00, 1189.00], [2009.00, 1193.00], [2012.00, 1197.00], [2018.00, 1197.00], [2025.00, 1200.00], [2032.00, 1203.00], [2055.00, 1204.00], [2055.00, 1204.00], 
[2055.00, 1204.00], [2088.00, 1204.00], [2089.00, 1204.00], [2090.00, 1204.00], [2106.00, 1200.00], [2108.00, 1200.00], [2110.00, 1200.00], [2129.00, 1199.00], [2134.00, 1197.00], 
[2139.00, 1195.00], [2168.00, 1193.00], [2172.00, 1191.00], [2176.00, 1189.00], [2184.00, 1178.00], [2190.00, 1175.00], [2196.00, 1172.00], [2208.00, 1166.00], [2211.00, 1165.00], 
[2214.00, 1164.00], [2222.00, 1157.00], [2226.00, 1155.00], [2230.00, 1153.00], [2240.00, 1147.00], [2243.00, 1145.00], [2246.00, 1143.00], [2262.00, 1136.00], [2262.00, 1136.00], 
[2262.00, 1136.00], [2273.00, 1133.00], [2274.00, 1133.00], [2275.00, 1133.00], [2287.00, 1117.00], [2287.00, 1117.00], [2287.00, 1117.00], [2289.00, 1115.00], [2293.00, 1109.00], 
[2297.00, 1103.00], [2304.00, 1097.00], [2304.00, 1096.00], [2304.00, 1095.00], [2306.00, 1094.00], [2309.00, 1086.00], [2312.00, 1078.00], [2324.00, 1055.00], [2324.00, 1055.00], 
[2324.00, 1055.00], [2334.00, 1045.00], [2334.00, 1045.00], [2334.00, 1045.00], [2336.00, 1059.00], [2335.00, 1060.00], [2334.00, 1061.00], [2331.00, 1072.00], [2331.00, 1073.00], 
[2331.00, 1074.00], [2328.00, 1079.00], [2328.00, 1084.00], [2328.00, 1089.00], [2336.00, 1109.00], [2337.00, 1109.00], [2338.00, 1109.00], [2338.00, 1110.00], [2339.00, 1115.00], 
[2351.00, 1129.00], [2360.00, 1132.00], [2361.00, 1133.00], [2362.00, 1134.00], [2385.00, 1144.00], [2385.00, 1144.00], [2385.00, 1144.00], [2391.00, 1145.00], [2395.00, 1145.00], 
[2399.00, 1145.00], [2404.00, 1145.00], [2407.00, 1146.00], [2410.00, 1147.00], [2421.00, 1145.00], [2421.00, 1145.00], [2421.00, 1145.00], [2443.00, 1148.00], [2443.00, 1148.00], 
[2443.00, 1148.00], [2453.00, 1149.00], [2454.00, 1150.00], [2455.00, 1151.00], [2470.00, 1151.00], [2470.00, 1151.00], [2470.00, 1151.00], [2484.00, 1156.00], [2484.00, 1156.00], 
[2484.00, 1156.00], [2492.00, 1152.00], [2492.00, 1152.00], [2492.00, 1152.00], [2507.00, 1148.00], [2507.00, 1148.00], [2507.00, 1148.00], [2514.00, 1133.00], [2514.00, 1133.00], 
[2501.00, 1163.00], [2500.00, 1164.00], [2505.00, 1179.00], [2505.00, 1179.00], [2505.00, 1179.00], [2510.00, 1190.00], [2510.00, 1190.00], [2510.00, 1190.00], [2515.00, 1203.00], 
[2516.00, 1207.00], [2517.00, 1211.00], [2509.00, 1232.00], [2509.00, 1232.00], [2509.00, 1232.00], [2509.00, 1234.00], [2507.00, 1238.00], [2505.00, 1242.00], [2494.00, 1272.00], 
[2492.00, 1274.00], [2490.00, 1276.00], [2493.00, 1282.00], [2491.00, 1288.00], [2471.00, 1332.00], [2473.00, 1333.00], [2470.00, 1341.00], [2467.00, 1349.00], [2466.00, 1349.00], 
[2463.00, 1356.00], [2457.00, 1368.00], [2448.00, 1377.00], [2448.00, 1377.00], [2448.00, 1377.00], [2462.00, 1388.00], [2462.00, 1388.00], [2462.00, 1388.00], [2485.00, 1394.00], 
[2485.00, 1394.00], [2485.00, 1394.00], [2499.00, 1399.00], [2501.00, 1399.00], [2503.00, 1399.00], [2517.00, 1403.00], [2516.00, 1404.00], [2515.00, 1405.00], [2498.00, 1405.00], 
[2498.00, 1405.00], [2498.00, 1405.00], [2484.00, 1405.00], [2476.00, 1403.00], [2468.00, 1401.00], [2465.00, 1401.00], [2460.00, 1402.00], [2455.00, 1403.00], [2441.00, 1405.00], 
[2440.00, 1407.00], [2439.00, 1409.00], [2436.00, 1416.00], [2434.00, 1420.00], [2432.00, 1424.00], [2427.00, 1438.00], [2426.00, 1439.00], [2425.00, 1440.00], [2421.00, 1450.00], 
[2419.00, 1454.00], [2417.00, 1458.00], [2411.00, 1469.00], [2410.00, 1472.00], [2409.00, 1475.00], [2405.00, 1481.00], [2403.00, 1489.00], [2401.00, 1497.00], [2400.00, 1506.00], 
[2399.00, 1508.00], [2398.00, 1510.00], [2394.00, 1524.00], [2394.00, 1527.00], [2394.00, 1530.00], [2401.00, 1534.00], [2404.00, 1536.00], [2407.00, 1538.00], [2426.00, 1541.00], 
[2427.00, 1541.00], [2428.00, 1541.00], [2439.00, 1539.00], [2439.00, 1539.00], [2439.00, 1539.00], [2457.00, 1538.00], [2457.00, 1538.00], [2457.00, 1538.00], [2469.00, 1534.00],
[2473.00, 1534.00], [2477.00, 1534.00], [2503.00, 1536.00], [2503.00, 1536.00], [2503.00, 1536.00], [2512.00, 1535.00], [2513.00, 1535.00], [2514.00, 1535.00], [2526.00, 1538.00], 
[2526.00, 1538.00], [2526.00, 1538.00], [2536.00, 1544.00], [2537.00, 1545.00], [2538.00, 1546.00], [2551.00, 1557.00], [2551.00, 1557.00], [2551.00, 1557.00], [2558.00, 1574.00], 
[2558.00, 1574.00], [2558.00, 1574.00], [2565.00, 1594.00], [2565.00, 1594.00], [2565.00, 1594.00], [2576.00, 1604.00], [2576.00, 1604.00], [2576.00, 1604.00], [2593.00, 1611.00], 
[2593.00, 1611.00], [2593.00, 1611.00], [2601.00, 1628.00], [2601.00, 1628.00], [2601.00, 1628.00], [2598.00, 1646.00], [2598.00, 1647.00], [2598.00, 1648.00], [2611.00, 1652.00], 
[2612.00, 1653.00], [2613.00, 1654.00], [2624.00, 1666.00], [2624.00, 1667.00], [2624.00, 1668.00], [2632.00, 1676.00], [2634.00, 1678.00], [2636.00, 1680.00], [2644.00, 1684.00], 
[2645.00, 1685.00], [2646.00, 1686.00], [2658.00, 1694.00], [2659.00, 1694.00], [2660.00, 1694.00], [2673.00, 1700.00], [2673.00, 1700.00], [2673.00, 1700.00], [2696.00, 1713.00], 
[2696.00, 1713.00], [2696.00, 1713.00], [2720.00, 1723.00], [2720.00, 1723.00], [2720.00, 1723.00], [2744.00, 1727.00], [2744.00, 1728.00], [2744.00, 1729.00], [2770.00, 1732.00],
[2770.00, 1732.00], [2770.00, 1732.00], [2787.00, 1745.00], [2787.00, 1746.00], [2787.00, 1747.00], [2778.00, 1761.00], [2784.00, 1767.00], [2790.00, 1773.00], [2791.00, 1784.00], 
[2791.00, 1786.00], [2791.00, 1788.00], [2794.00, 1803.00], [2794.00, 1803.00], [2794.00, 1803.00], [2799.00, 1810.00], [2801.00, 1811.00], [2803.00, 1812.00], [2815.00, 1819.00], 
[2818.00, 1820.00], [2821.00, 1821.00], [2836.00, 1827.00], [2837.00, 1828.00], [2838.00, 1829.00], [2849.00, 1837.00], [2850.00, 1837.00], [2851.00, 1837.00], [2864.00, 1845.00], 
[2866.00, 1847.00], [2868.00, 1849.00], [2876.00, 1854.00], [2881.00, 1858.00], [2886.00, 1862.00], [2899.00, 1873.00], [2900.00, 1874.00], [2901.00, 1875.00], [2907.00, 1879.00], 
[2910.00, 1880.00], [2913.00, 1881.00], [2934.00, 1888.00], [2934.00, 1888.00], [2934.00, 1888.00], [2939.00, 1886.00], [2943.00, 1890.00], [2947.00, 1894.00], [2956.00, 1900.00], 
[2956.00, 1901.00], [2956.00, 1902.00], [2955.00, 1909.00], [2955.00, 1910.00], [2955.00, 1911.00], [2950.00, 1920.00], [2949.00, 1922.00], [2948.00, 1924.00], [2941.00, 1932.00], 
[2941.00, 1934.00], [2941.00, 1936.00], [2938.00, 1957.00], [2938.00, 1957.00], [2938.00, 1957.00], [2944.00, 1967.00], [2945.00, 1969.00], [2946.00, 1971.00], [2948.00, 1976.00], 
[2954.00, 1980.00], [2960.00, 1984.00], [2966.00, 1985.00], [2966.00, 1985.00], [2966.00, 1985.00], [2973.00, 1985.00], [2973.00, 1985.00], [2973.00, 1985.00], [2990.00, 1983.00], 
[2990.00, 1983.00], [2990.00, 1983.00], [3007.00, 1976.00], [3007.00, 1976.00], [3007.00, 1976.00], [3027.00, 1984.00], [3027.00, 1985.00], [3027.00, 1986.00], [3031.00, 1999.00], 
[3031.00, 2001.00], [3031.00, 2003.00], [3022.00, 2020.00], [3021.00, 2021.00], [3020.00, 2022.00], [3011.00, 2038.00], [3010.00, 2039.00], [3009.00, 2040.00], [3003.00, 2048.00], 
[3003.00, 2052.00], [3003.00, 2056.00], [3004.00, 2070.00], [3005.00, 2071.00], [3006.00, 2072.00], [3025.00, 2081.00], [3025.00, 2081.00], [3025.00, 2081.00], [3043.00, 2090.00], 
[3043.00, 2090.00], [3043.00, 2090.00], [3054.00, 2100.00], [3054.00, 2100.00], [3054.00, 2100.00], [3054.00, 2113.00], [3054.00, 2114.00], [3054.00, 2115.00], [3053.00, 2130.00], 
[3052.00, 2131.00], [3051.00, 2132.00], [3046.00, 2149.00], [3046.00, 2150.00], [3046.00, 2151.00], [3043.00, 2164.00], [3043.00, 2164.00], [3043.00, 2164.00], [3039.00, 2176.00], 
[3039.00, 2177.00], [3039.00, 2178.00], [3034.00, 2188.00], [3033.00, 2191.00], [3032.00, 2194.00], [3030.00, 2208.00], [3029.00, 2212.00], [3028.00, 2216.00], [3024.00, 2226.00], 
[3024.00, 2229.00], [3024.00, 2232.00], [3028.00, 2247.00], [3028.00, 2250.00], [3028.00, 2253.00], [3031.00, 2267.00], [3031.00, 2269.00], [3031.00, 2271.00], [3033.00, 2283.00], 
[3035.00, 2286.00], [3037.00, 2289.00], [3039.00, 2303.00], [3039.00, 2303.00], [3039.00, 2303.00], [3042.00, 2321.00], [3042.00, 2321.00], [3042.00, 2321.00], [3045.00, 2343.00], 
[3045.00, 2346.00], [3045.00, 2349.00], [3053.00, 2366.00], [3053.00, 2367.00], [3053.00, 2368.00], [3068.00, 2372.00], [3070.00, 2371.00], [3072.00, 2370.00], [3096.00, 2355.00], 
[3097.00, 2353.00], [3098.00, 2351.00], [3100.00, 2351.00], [3105.00, 2342.00], [3110.00, 2333.00], [3113.00, 2320.00], [3116.00, 2317.00], [3119.00, 2314.00], [3123.00, 2310.00],
[3128.00, 2303.00], [3133.00, 2296.00], [3137.00, 2288.00], [3142.00, 2284.00], [3147.00, 2280.00], [3150.00, 2274.00], [3153.00, 2273.00], [3156.00, 2272.00], [3154.00, 2270.00], 
[3165.00, 2269.00], [3186.00, 2268.00], [3191.00, 2268.00], [3198.00, 2273.00], [3205.00, 2278.00], [3212.00, 2278.00], [3219.00, 2284.00], [3237.00, 2300.00], [3242.00, 2303.00], 
[3250.00, 2308.00], [3258.00, 2313.00], [3261.00, 2317.00], [3270.00, 2322.00], [3279.00, 2327.00], [3285.00, 2329.00], [3287.00, 2330.00], [3289.00, 2331.00], [3307.00, 2338.00], 
[3307.00, 2338.00], [3307.00, 2338.00], [3314.00, 2348.00], [3318.00, 2349.00], [3327.00, 2352.00], [3334.00, 2356.00], [3337.00, 2357.00], [3344.00, 2360.00], [3355.00, 2368.00], 
[3355.00, 2368.00], [3355.00, 2368.00], [3342.00, 2383.00], [3342.00, 2383.00], [3342.00, 2383.00], [3330.00, 2397.00], [3330.00, 2398.00], [3330.00, 2399.00], [3320.00, 2420.00], 
[3320.00, 2422.00], [3320.00, 2424.00], [3315.00, 2446.00], [3315.00, 2447.00], [3315.00, 2448.00], [3315.00, 2461.00], [3316.00, 2464.00], [3317.00, 2467.00], [3316.00, 2490.00], 
[3316.00, 2490.00], [3316.00, 2490.00], [3317.00, 2516.00], [3317.00, 2516.00], [3317.00, 2516.00], [3318.00, 2525.00], [3318.00, 2529.00], [3318.00, 2533.00], [3319.00, 2547.00], 
[3321.00, 2551.00], [3323.00, 2555.00], [3330.00, 2566.00], [3331.00, 2573.00], [3332.00, 2580.00], [3334.00, 2593.00], [3334.00, 2599.00], [3334.00, 2605.00], [3336.00, 2608.00], 
[3337.00, 2613.00], [3338.00, 2618.00], [3340.00, 2622.00], [3340.00, 2628.00], [3340.00, 2634.00], [3345.00, 2652.00], [3345.00, 2653.00], [3345.00, 2662.00], [3351.00, 2668.00], 
[3352.00, 2668.00], [3353.00, 2668.00], [3377.00, 2672.00], [3378.00, 2672.00], [3379.00, 2672.00], [3397.00, 2671.00], [3400.00, 2670.00], [3403.00, 2669.00], [3406.00, 2668.00], 
[3409.00, 2668.00], [3412.00, 2668.00], [3424.00, 2670.00], [3428.00, 2671.00], [3432.00, 2672.00], [3439.00, 2673.00], [3440.00, 2673.00], [3441.00, 2673.00], [3443.00, 2675.00], 
[3447.00, 2674.00], [3451.00, 2673.00], [3450.00, 2653.00], [3450.00, 2653.00], [3450.00, 2653.00], [3449.00, 2646.00], [3447.00, 2643.00], [3445.00, 2640.00], [3440.00, 2634.00], 
[3436.00, 2629.00], [3432.00, 2624.00], [3428.00, 2616.00], [3428.00, 2615.00], [3428.00, 2614.00], [3426.00, 2605.00], [3425.00, 2596.00], [3422.00, 2578.00], [3422.00, 2575.00], 
[3418.00, 2565.00], [3414.00, 2555.00], [3413.00, 2549.00], [3412.00, 2545.00], [3411.00, 2541.00], [3410.00, 2534.00], [3411.00, 2530.00], [3449.00, 2518.00], [3448.00, 2517.00],
[3456.00, 2517.00], [3464.00, 2517.00], [3476.00, 2517.00], [3480.00, 2518.00], [3484.00, 2519.00], [3489.00, 2520.00], [3493.00, 2519.00], [3502.00, 2512.00], [3503.00, 2512.00], 
[3503.00, 2505.00], [3503.00, 2489.00], [3508.00, 2484.00], [3508.00, 2484.00], [3508.00, 2484.00], [3521.00, 2482.00], [3526.00, 2481.00], [3531.00, 2480.00], [3539.00, 2481.00], 
[3540.00, 2480.00], [3541.00, 2479.00], [3544.00, 2478.00], [3552.00, 2479.00], [3560.00, 2480.00], [3570.00, 2481.00], [3574.00, 2482.00], [3578.00, 2483.00], [3588.00, 2484.00], 
[3594.00, 2485.00], [3600.00, 2486.00], [3612.00, 2486.00], [3612.00, 2486.00], [3612.00, 2486.00], [3617.00, 2488.00], [3620.00, 2492.00], [3623.00, 2496.00], [3624.00, 2496.00],
[3625.00, 2503.00], [3626.00, 2510.00], [3626.00, 2510.00], [3625.00, 2516.00], [3622.00, 2534.00], [3622.00, 2536.00], [3621.00, 2541.00]]

let sightseeingBar = document.getElementById("sightseeing");

class Landmark {
    constructor(name, distance){
        this.name = name;
        this.distance = distance;
        this.div = this.createCard();
        this.updateDivText();
    }

    updateDivText(){
        let remainingDist = Math.round(this.distance - DISTANCE_KM);
        let desc = "<br><strong>"+this.name+"</strong>";
        if (Math.abs(remainingDist) < 4){
            desc = "You have reached"+desc;
        }
        else if (remainingDist < 0){
            desc = Math.abs(remainingDist) +" km since "+desc;
        } else {
            desc = remainingDist+" km until "+desc;
        }
        this.div.innerHTML = desc;
    }

    createCard(){
        let card = document.createElement("div");
        card.className = "card";
        sightseeingBar.appendChild(card);
        card.onclick = () => {
            distanceInput.value = this.distance;
            distanceInput.oninput()
            card.scrollIntoView();
        };
        return card;
    }
}

if (window.innerWidth < window.innerHeight){
    document.body.style = "font-size:0.75em;"
}

let markersLayer = null;

let DISTANCE_KM = 100;   // <------ Hi! Update this to the number of kilometres you've travelled! You can also update it via the UI once the webpage is running.
let polyline = null;
let polylineBG = null;

let landmarks = [
    new Landmark("Hobbiton",0),
    new Landmark("Bucklebury Ferry",73),
    new Landmark("Bree",217),
    new Landmark("Weathertop",345),
    new Landmark("the Last Bridge",532),
    new Landmark("Rivendell",743),
    new Landmark("the Pass of Caradhras",935),
    new Landmark("Doors of Durin",1062),
    new Landmark("the Mirrormere",1155),
    new Landmark("Lothlorien",1310),
    new Landmark("Falls of Rauros",1807),
    new Landmark("The Dead Marshes",1970),
    new Landmark("The Black Gate",2025),
    new Landmark("Ithilien",2105),
    new Landmark("Shelob's Lair",2260),
    new Landmark("Mount Doom",2510)
]

let distanceInput = document.getElementById("km-input");
distanceInput.value = DISTANCE_KM;
distanceInput.oninput = () => {
    DISTANCE_KM = Math.abs(distanceInput.value);
    spawnPolyline();
    landmarks.forEach(landmark => {
        landmark.updateDivText();
    })};

let map = null;
let pointsList = null;

start()
distanceInput.oninput();

async function start(){

    //var map = L.map('map').setView([52.4862,-1.8904], 10);
    //L.tileLayer.provider("Esri.WorldGrayCanvas").addTo(map);
    //map.setMinZoom(4)    

    await import('../public/map.webp')
    map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -2,
        maxZoom: 2
    });

    map.attributionControl.addAttribution("lotrproject.com (basemap)");

    const bounds = [[0, 0], [4334, 5000]];
    L.imageOverlay(mapImage, bounds).addTo(map);
    map.fitBounds(bounds);

    markersLayer = new L.layerGroup().addTo(map)

    pointsList = FRODO_AND_SAM_PATH;

    for (let i = 0; i < pointsList.length; i++){
        pointsList[i] = [4334 - pointsList[i][1], pointsList[i][0]]
    }

    spawnPolyline();
}

async function spawnPolyline(){

    let distanceTravelledAlongLine = DISTANCE_KM;  

    if (polyline != null){
        await polyline.removeFrom(map);
        await polylineBG.removeFrom(map);
    }

    let ptsToDistance = getPolylinePointsListUpToDistance(pointsList, distanceTravelledAlongLine);

    if (ptsToDistance == null){
        return;
    }

    polylineBG = new L.Polyline(ptsToDistance, {
        color: 'black',
        weight: 12,
        opacity: 0.9,
        smoothFactor: 0
    });

    polyline = new L.Polyline(ptsToDistance, {
        color: 'red',
        weight: 6,
        opacity: 0.9,
        smoothFactor: 0
    });
    let popupText = "<div style=text-align:center;><strong>The total length<br>of this line is</strong><br><div style=font-size:1.5em;>"+DISTANCE_KM+" km</div></div>";
    polylineBG.bindPopup(popupText)
    polyline.bindPopup(popupText)
    polylineBG.addTo(map);
    polyline.addTo(map);
    map.flyTo(ptsToDistance[ptsToDistance.length - 1], 0.5);
    //console.log(polyline)
}

function euclideanMiddleEarth(a, b){
    return Math.sqrt(Math.pow(b[0] - a[0],2) + Math.pow(b[1] - a[1],2)) / 1.8;
}

function getPolylinePointsListUpToDistance(pointsList, distanceKm){
    let newPoints = [];
    let cumuDist = 0;

    if (pointsList == null){
        return null;
    }

    if (distanceKm == 0){
        return [pointsList[0]];
    }
    
    for (let i = 0; i < pointsList.length; i++){

        let distFromPrev= 0;
        
        if (i > 0){
            distFromPrev = euclideanMiddleEarth(pointsList[i-1], pointsList[i]);
        }
        //console.log(cumuDist + distFromPrev + ", "+distanceKm)
        if (cumuDist + distFromPrev < distanceKm){
            //console.log("Push a regular point")
            newPoints.push(pointsList[i]);
            cumuDist += distFromPrev;
        } else {
            //console.log("Pushing partial last leg")
            let lastLegPartialDist = distanceKm - (cumuDist + distFromPrev);
            let proportionOfLastLegComplete = lastLegPartialDist / distFromPrev;
            newPoints.push([pointsList[i][0] + ((pointsList[i][0] - pointsList[i-1][0]) * proportionOfLastLegComplete),
                            pointsList[i][1] + ((pointsList[i][1] - pointsList[i-1][1]) * proportionOfLastLegComplete)]);
            break;
        }
        //console.log(cumuDist);
    }
    //console.log(newPoints);
    return newPoints;
}