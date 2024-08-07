/* eslint-disable react/no-unknown-property */

type Props = {
  className?: string,
  height?: number | string,
  width?: number | string,
  borderColor: string,
  bgColor: string
};

function PhoneModal(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 414.75 840"
      className={props.className}
      width={props.width}
      height={props.height}
    >
      <defs>
        <linearGradient id="a" x1="294.27" y1="245.07" x2="294.27" y2="213.79" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2b2b2b" />
          <stop offset="0.03" stopColor="#858585" />
          <stop offset="0.05" stopColor="#bfbfbf" />
          <stop offset="0.15" stopColor="#8c8c8c" />
          <stop offset="0.85" stopColor="#8c8c8c" />
          <stop offset="0.95" stopColor="#bfbfbf" />
          <stop offset="0.97" stopColor="#858585" />
          <stop offset="1" stopColor="#2b2b2b" />
        </linearGradient>
        <linearGradient id="b" x1="294.27" y1="336.73" x2="294.27" y2="273.28" xlinkHref="#a" />
        <linearGradient id="c" x1="294.27" y1="416.87" x2="294.27" y2="353.42" xlinkHref="#a" />
        <linearGradient id="d" x1="647.04" y1="574.79" x2="647.04" y2="474.5" gradientTransform="translate(1353.05 869.8) rotate(180)" xlinkHref="#a" />
        <clipPath id="e" transform="translate(-292.76 -79.78)">
          <path d="M522.74,111.73a3.28,3.28,0,0,1-3.28,3.28h-38a3.28,3.28,0,0,1-3.28-3.28h0a3.28,3.28,0,0,1,3.28-3.29h38a3.28,3.28,0,0,1,3.28,3.29Z" stroke="#1a1a1c" strokeMiterlimit="10" />
        </clipPath>
      </defs>
      <title>iPhone12</title>
      <g>
        <g>
          <rect x="3.01" width="408.74" height="840" rx="63.73" />
          <rect x="3.01" width="408.74" height="840" rx="63.73" fill="#707070" />
          <rect x="4.28" y="1.27" width="406.19" height="837.44" rx="62.46" fill="#969696" />
          <rect x="5.56" y="2.55" width="403.64" height="834.9" rx="61.18" fill="#c1c1c1" />
          <rect x="6.83" y="3.82" width="401.09" height="832.35" rx="59.91" fill="#969696" />
          <rect x="8.11" y="5.1" width="398.54" height="829.8" rx="58.63" fill="#707070" />
          <path d="M295.77,213.79H294a1.28,1.28,0,0,0-1.28,1.28V243.8a1.28,1.28,0,0,0,1.28,1.27h1.73Z" transform="translate(-292.76 -79.78)" fill="url(#a)" />
          <path d="M295.77,273.28H294a1.28,1.28,0,0,0-1.28,1.27v60.9a1.28,1.28,0,0,0,1.28,1.28h1.73Z" transform="translate(-292.76 -79.78)" fill="url(#b)" />
          <path d="M295.77,353.42H294a1.28,1.28,0,0,0-1.28,1.28v60.9a1.28,1.28,0,0,0,1.28,1.27h1.73Z" transform="translate(-292.76 -79.78)" fill="url(#c)" />
          <path d="M704.51,395.3h1.73a1.27,1.27,0,0,0,1.27-1.27V296.29a1.27,1.27,0,0,0-1.27-1.28h-1.73Z" transform="translate(-292.76 -79.78)" fill="url(#d)" />
          <path d="M706.24,295h-1.73V143.51a63.8,63.8,0,0,0-63.73-63.73H359.5a63.8,63.8,0,0,0-63.73,63.73v70.28H294a1.28,1.28,0,0,0-1.28,1.28V243.8a1.28,1.28,0,0,0,1.28,1.27h1.73v28.21H294a1.28,1.28,0,0,0-1.28,1.27v60.9a1.28,1.28,0,0,0,1.28,1.28h1.73v16.69H294a1.28,1.28,0,0,0-1.28,1.28v60.9a1.28,1.28,0,0,0,1.28,1.27h1.73V856a63.81,63.81,0,0,0,63.73,63.74H640.78A63.81,63.81,0,0,0,704.51,856V395.3h1.73a1.27,1.27,0,0,0,1.27-1.27V296.29A1.27,1.27,0,0,0,706.24,295Z" transform="translate(-292.76 -79.78)" mix-blend-mode="overlay" fill={props.borderColor} />
          <rect x="9.38" y="6.37" width="395.99" height="827.25" rx="57.36" />
          <g>
            <path d="M548.5,111.48a6.84,6.84,0,1,1-6.84-6.84A6.84,6.84,0,0,1,548.5,111.48Z" transform="translate(-292.76 -79.78)" fill="#1a1a1c" />
            <path d="M545.68,111.48a4,4,0,1,1-4-4A4,4,0,0,1,545.68,111.48Z" transform="translate(-292.76 -79.78)" fill="#0d1010" />
            <image width="8" height="9" transform="translate(245.24 27.22)" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAJCAYAAAAPU20uAAAACXBIWXMAAAsSAAALEgHS3X78AAAA0klEQVQYV2WQMUoDURiEv//f3eyT7IKC6Apqa2OTVB7AygvYegXv5FFsbAIWFhaKqGAC2hg12Y3vjU0CigNTDB8MzCCJlatmoN9ZEiaJ5uhMn083oMTa7iHt5I7UfjEdj8z3js+VhwopIYH3ApYXYADgWaixXsCzgvTdErs564MTsv4GdTOU+xJijhYd85dbPNSUm/vLhrJPiguUIlaUhJ0DkGhfH7G8IP94uAbPMDNAqJvxdnmBYuT9+cpMElvDU80m9yBBSqw0HY/sz+Zq+/8PPwX1e2OUwQ4LAAAAAElFTkSuQmCC" />
          </g>
          <g>
            <path d="M522.74,111.73a3.28,3.28,0,0,1-3.28,3.28h-38a3.28,3.28,0,0,1-3.28-3.28h0a3.28,3.28,0,0,1,3.28-3.29h38a3.28,3.28,0,0,1,3.28,3.29Z" transform="translate(-292.76 -79.78)" />
            <g clipPath="url(#e)">
              <g>
                <rect x="179.73" y="28.82" width="0.52" height="6.25" fill="#1a1a1c" />
                <rect x="181.13" y="28.82" width="0.52" height="6.25" fill="#1a1a1c" />
                <rect x="182.53" y="28.82" width="0.52" height="6.25" fill="#1a1a1c" />
                <rect x="183.93" y="28.82" width="0.52" height="6.25" fill="#1a1a1c" />
                <rect x="185.33" y="28.82" width="0.52" height="6.25" fill="#1a1a1c" />
                <rect x="186.73" y="28.82" width="0.52" height="6.25" fill="#1a1a1c" />
                <rect x="188.12" y="28.82" width="0.52" height="6.25" fill="#1a1a1c" />
                <rect x="189.52" y="28.82" width="0.52" height="6.25" fill="#1a1a1c" />
                <rect x="190.92" y="28.82" width="0.52" height="6.25" fill="#1a1a1c" />
                <rect x="192.32" y="28.82" width="0.52" height="6.25" fill="#1a1a1c" />
                <rect x="193.72" y="28.82" width="0.52" height="6.25" fill="#1a1a1c" />
                <rect x="195.12" y="28.82" width="0.52" height="6.25" fill="#1a1a1c" />
                <rect x="196.52" y="28.82" width="0.51" height="6.25" fill="#1a1a1c" />
                <rect x="197.92" y="28.82" width="0.52" height="6.25" fill="#1a1a1c" />
                <rect x="199.32" y="28.82" width="0.51" height="6.25" fill="#1a1a1c" />
                <rect x="200.72" y="28.82" width="0.51" height="6.25" fill="#1a1a1c" />
                <rect x="202.11" y="28.82" width="0.52" height="6.25" fill="#1a1a1c" />
                <rect x="203.51" y="28.82" width="0.51" height="6.25" fill="#1a1a1c" />
                <rect x="204.91" y="28.82" width="0.51" height="6.25" fill="#1a1a1c" />
                <rect x="206.31" y="28.82" width="0.52" height="6.25" fill="#1a1a1c" />
                <rect x="207.71" y="28.82" width="0.52" height="6.25" fill="#1a1a1c" />
                <rect x="209.1" y="28.82" width="0.52" height="6.25" fill="#1a1a1c" />
                <rect x="210.51" y="28.82" width="0.51" height="6.25" fill="#1a1a1c" />
                <rect x="211.9" y="28.82" width="0.51" height="6.25" fill="#1a1a1c" />
                <rect x="213.3" y="28.82" width="0.51" height="6.25" fill="#1a1a1c" />
                <rect x="214.7" y="28.82" width="0.51" height="6.25" fill="#1a1a1c" />
                <rect x="216.1" y="28.82" width="0.51" height="6.25" fill="#1a1a1c" />
                <rect x="217.5" y="28.82" width="0.52" height="6.25" fill="#1a1a1c" />
                <rect x="218.9" y="28.82" width="0.51" height="6.25" fill="#1a1a1c" />
                <rect x="220.29" y="28.82" width="0.52" height="6.25" fill="#1a1a1c" />
                <rect x="221.7" y="28.82" width="0.51" height="6.25" fill="#1a1a1c" />
                <rect x="223.09" y="28.82" width="0.52" height="6.25" fill="#1a1a1c" />
                <rect x="224.49" y="28.82" width="0.52" height="6.25" fill="#1a1a1c" />
                <rect x="225.89" y="28.82" width="0.52" height="6.25" fill="#1a1a1c" />
                <rect x="227.29" y="28.82" width="0.52" height="6.25" fill="#1a1a1c" />
                <rect x="228.69" y="28.82" width="0.52" height="6.25" fill="#1a1a1c" />
                <rect x="230.09" y="28.82" width="0.52" height="6.25" fill="#1a1a1c" />
              </g>
              <g>
                <rect x="184.38" y="29.56" width="46.68" height="0.52" fill="#1a1a1c" />
                <rect x="184.38" y="30.63" width="46.68" height="0.52" fill="#1a1a1c" />
                <rect x="184.38" y="31.69" width="46.68" height="0.52" fill="#1a1a1c" />
                <rect x="184.38" y="32.75" width="46.68" height="0.52" fill="#1a1a1c" />
                <rect x="184.38" y="33.82" width="46.68" height="0.52" fill="#1a1a1c" />
              </g>
            </g>
            <path d="M522.74,111.73a3.28,3.28,0,0,1-3.28,3.28h-38a3.28,3.28,0,0,1-3.28-3.28h0a3.28,3.28,0,0,1,3.28-3.29h38a3.28,3.28,0,0,1,3.28,3.29Z" transform="translate(-292.76 -79.78)" fill="none" stroke="#1a1a1c" strokeMiterlimit="10" />
          </g>
          <path d="M580.92,130.53c6.69,0,19.28-7.68,19.28-21.69v-3.51a4.82,4.82,0,0,1,5.26-4.94h29.32c31.54,0,50.18,15.29,50.18,52.58l.32,687c0,24.38-1.43,59.59-55.92,59.59H371.08c-54.49,0-55.92-35.21-55.92-59.59l.32-687c0-37.29,18.64-52.58,50.19-52.58H395a4.82,4.82,0,0,1,5.26,4.94v3.51c0,14,12.59,21.69,19.28,21.69Z" transform="translate(-292.76 -79.78)" fill={props.bgColor} />
          <g>
            <rect x="405.37" y="83.91" width="6.38" height="9.14" fill="#fff" opacity="0.3" />
            <rect x="322.09" width="9.13" height="6.37" fill="#fff" opacity="0.3" />
            <rect x="3.01" y="84.24" width="6.37" height="8.68" fill="#fff" opacity="0.3" />
            <rect x="3.01" y="747.51" width="6.37" height="8.71" fill="#fff" opacity="0.3" />
            <rect x="83.74" y="833.62" width="9.35" height="6.37" fill="#fff" opacity="0.3" />
            <rect x="405.37" y="747.37" width="6.38" height="9.35" fill="#fff" opacity="0.3" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default PhoneModal;
