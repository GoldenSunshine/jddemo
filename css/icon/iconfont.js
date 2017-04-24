;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-dingwei" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M787.658752 340.26496c0-152.02304-123.31008-275.28192-275.310592-275.28192-152.044544 0-275.3536 123.25888-275.3536 275.28192 0 50.190336 13.705216 97.127424 37.085184 137.65632l-0.206848 0 238.368768 481.788928 238.507008-481.788928-0.275456 0C773.9904 437.392384 787.658752 390.455296 787.658752 340.26496zM512.310272 421.98016c-63.85664 0-115.657728-51.7632-115.657728-115.61984 0-63.893504 51.801088-115.69152 115.657728-115.69152 63.926272 0 115.687424 51.79904 115.687424 115.69152C627.997696 370.21696 576.236544 421.98016 512.310272 421.98016z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M927.230976 208.781312c-17.038336-3.968-34.05824 6.606848-38.064128 23.6288l-9.050112 38.733824L297.924608 271.143936l-16.809984-79.019008c-3.110912-14.637056-16.044032-25.095168-31.000576-25.095168l-145.46944 0c-17.509376 0-31.700992 14.19776-31.700992 31.675392 0 17.518592 14.191616 31.694848 31.700992 31.694848l119.829504 0 81.733632 383.986688c3.109888 14.592 16.006144 25.0624 30.98624 25.0624l496.751616 0c14.749696 0 27.503616-10.141696 30.862336-24.485888l86.066176-368.101376C954.840064 229.803008 944.284672 212.765696 927.230976 208.781312zM511.618048 430.086144l0-95.608832 153.371648 0 0 95.608832L511.618048 430.086144zM664.99072 468.099072l0 107.979776L511.618048 576.078848 511.618048 468.099072 664.99072 468.099072zM703.000576 334.476288l162.310144 0-22.347776 95.608832L703.000576 430.08512 703.000576 334.476288zM473.58976 334.476288l0 95.608832L331.756544 430.08512l-20.355072-95.608832L473.58976 334.476288zM339.83488 468.099072l133.75488 0 0 107.979776L362.829824 576.078848 339.83488 468.099072zM808.812544 576.077824 703.000576 576.077824 703.000576 468.099072l131.065856 0L808.812544 576.077824z"  ></path>' +
    '' +
    '<path d="M433.297408 716.197888c-39.09632 0-70.744064 31.670272-70.744064 70.744064s31.647744 70.721536 70.744064 70.721536c39.036928 0 70.703104-31.647744 70.703104-70.721536S472.334336 716.197888 433.297408 716.197888z"  ></path>' +
    '' +
    '<path d="M737.426432 716.197888c-39.098368 0-70.744064 31.670272-70.744064 70.744064s31.645696 70.721536 70.744064 70.721536c39.058432 0 70.720512-31.647744 70.720512-70.721536S776.484864 716.197888 737.426432 716.197888z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-94" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M906.083 865.481c-65.494 0-102.844-39.16-146.092-84.504-15.315-16.049-31.151-32.656-49.649-49.161-48.431-43.226-97.175-49.178-142.629-49.178-8.149 0-16.055 0.188-23.662 0.369-7.315 0.182-14.364 0.348-21.105 0.348l-21.891 0c-6.741 0-13.789-0.166-21.096-0.348-7.615-0.181-15.521-0.369-23.672-0.369-45.453 0-94.198 5.952-142.627 49.178-18.498 16.505-34.334 33.112-49.651 49.161-43.248 45.344-80.598 84.504-146.092 84.504-25.506 0-46.839-9.379-63.408-27.877-42.414-47.366-52.745-154.588-32.531-337.44 27.861-251.897 143.038-341.646 241.534-341.646 35.492 0 59.825 14.6 85.591 30.067 35.515 21.308 75.771 45.468 162.897 45.468s127.381-24.16 162.896-45.468c25.767-15.467 50.099-30.067 85.591-30.067 98.497 0 213.674 89.749 241.535 341.646 20.214 182.852 9.883 290.074-32.531 337.44C952.924 856.103 931.59 865.481 906.083 865.481zM567.713 650.384c49.359 0 107.459 6.811 164.111 57.366 19.458 17.372 35.751 34.452 51.508 50.967 41.257 43.255 71.07 74.51 122.751 74.51 16.167 0 29.05-5.606 39.382-17.144 34.87-38.939 43.106-144.037 24.49-312.375-25.514-230.73-124.932-312.935-209.468-312.935-26.562 0-45.287 11.237-68.991 25.467-37.176 22.302-83.44 50.067-179.496 50.067-96.056 0-142.32-27.766-179.497-50.067-23.703-14.229-42.429-25.467-68.991-25.467-84.535 0-183.954 82.204-209.468 312.935C35.428 672.046 43.665 777.144 78.535 816.083c10.332 11.537 23.215 17.144 39.382 17.144 51.682 0 81.496-31.255 122.751-74.51 15.757-16.515 32.05-33.595 51.509-50.967 66.305-59.179 134.603-58.272 188.553-56.988 7.04 0.172 13.827 0.338 20.324 0.338l21.891 0c6.497 0 13.285-0.166 20.325-0.338C551.129 650.572 559.296 650.384 567.713 650.384z"  ></path>' +
    '' +
    '<path d="M811.705 365.326c0 26.727-21.663 48.382-48.382 48.382-26.721 0-48.383-21.655-48.383-48.382 0-26.728 21.662-48.383 48.383-48.383C790.042 316.942 811.705 338.598 811.705 365.326z"  ></path>' +
    '' +
    '<path d="M811.705 558.855c0 26.727-21.663 48.383-48.382 48.383-26.721 0-48.383-21.656-48.383-48.383 0-26.728 21.662-48.383 48.383-48.383C790.042 510.472 811.705 532.128 811.705 558.855z"  ></path>' +
    '' +
    '<path d="M860.08 510.472c-26.72 0-48.383-21.655-48.383-48.382 0-26.727 21.663-48.382 48.383-48.382 26.718 0 48.383 21.656 48.383 48.382C908.463 488.817 886.798 510.472 860.08 510.472z"  ></path>' +
    '' +
    '<path d="M666.549 510.472c-26.719 0-48.382-21.655-48.382-48.382 0-26.727 21.663-48.382 48.382-48.382 26.721 0 48.384 21.656 48.384 48.382C714.933 488.817 693.27 510.472 666.549 510.472z"  ></path>' +
    '' +
    '<path d="M387.02 429.835l-80.646 0 0-80.637c0-17.813-14.442-32.255-32.255-32.255-17.813 0-32.255 14.442-32.255 32.255l0 80.637-80.63 0c-17.813 0-32.254 14.442-32.254 32.255 0 17.813 14.442 32.255 32.254 32.255l80.63 0 0 80.637c0 17.813 14.442 32.257 32.255 32.257 17.813 0 32.255-14.443 32.255-32.257l0-80.637 80.646 0c17.813 0 32.254-14.442 32.254-32.255C419.274 444.277 404.833 429.835 387.02 429.835z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-licai" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M414.397055 324.536444c-31.010271-56.707536-68.196195-108.768239-108.431571-159.306262 135.739521 0 271.003204 0 406.90236 0-20.182668 25.476231-39.182394 51.199079-57.184397 77.648474-17.959024 26.386974-34.930557 53.375651-50.142004 81.638345 1.065262 0.668219 1.839905 1.192152 2.648316 1.656733 79.960123 46.0058 137.278573 111.805412 172.089403 197.179848 12.259208 30.066783 20.468171 61.291948 25.640983 93.338828 4.578272 28.359908 6.614651 56.902988 6.437619 85.612866-0.073678 11.978822-1.654686 23.830755-3.491521 35.635615-3.226484 20.74344-8.449439 40.96704-16.384156 60.444651-11.667737 28.64234-28.473495 53.728692-51.604308 74.414827-20.12434 17.997909-43.180452 31.043017-68.425416 40.375569-19.809161 7.323802-40.243563 12.096503-61.114916 15.146978-26.03598 3.805676-52.222385 4.511757-78.476329 4.03899-4.64888-0.083911-9.307993 0.272199-13.953803 0.1361-5.674233-0.165776-11.31879-0.391926-17.014512-0.035816-5.78782 0.36225-11.626805-0.167822-17.439184-0.081864-15.445784 0.229221-30.882358 0.113587-46.298466-0.947582-35.235502-2.424212-69.582775-8.872065-102.246709-22.806425-29.043477-12.389168-54.348816-29.990035-74.946946-54.086849-17.690918-20.695345-30.234605-44.261063-38.883589-69.980841-5.91471-17.587564-9.629311-35.659151-12.287861-54.010101-3.007497-20.75879-2.744507-41.548278-1.25048-62.35107 0.960885-13.382798 2.160199-26.770713 3.920286-40.068578 5.78168-43.668569 17.564028-85.664032 36.33351-125.577067 32.757055-69.654406 81.70793-125.131929 146.515958-166.619832 5.250584-3.361561 10.701736-6.407943 16.060791-9.599635C412.266531 325.799204 413.166017 325.267085 414.397055 324.536444zM466.107787 342.857718c-1.373277 0.655939-2.317789 1.113357-3.267417 1.559519-8.416693 3.956102-16.986883 7.619538-25.226544 11.917424-34.18252 17.827017-64.183811 41.207517-90.530876 69.27169-45.613874 48.586578-74.705446 105.901958-89.585341 170.639379-5.577019 24.263613-8.854669 48.852638-10.340509 73.706699-1.252527 20.950148-1.437745 41.818431 2.01182 62.627363 2.87856 17.366529 6.948249 34.383088 13.487176 50.752918 13.151531 32.927947 34.19173 59.349713 64.563458 78.036307 18.463514 11.359722 38.490639 18.835997 59.511395 23.782659 24.402783 5.742794 49.202609 8.193613 74.223468 8.343015 28.556383 0.169869 57.115835-0.01842 85.673242 0.097214 20.968567 0.084934 41.856293-0.839111 62.622246-3.9121 18.144242-2.685155 35.900651-6.887874 53.043077-13.486152 43.430138-16.71673 74.818009-46.044686 93.116771-89.049129 7.283894-17.116843 12.142551-34.936697 14.852266-53.30095 1.479701-10.026354 2.793626-20.137643 3.187599-30.248931 0.620124-15.960507-0.310062-31.91999-1.693572-47.846728-2.110057-24.27487-6.063089-48.226375-12.235672-71.797209-15.106046-57.685817-41.895179-109.172445-82.096786-153.388483-32.117488-35.32453-69.480444-63.608713-113.352651-82.933851-2.707668-1.193175-5.3918-2.442632-8.071839-3.696182-0.720408-0.337691-1.388627-0.788969-2.102894-1.200338 11.012821-25.472138 23.596418-49.881061 37.232996-73.760934 13.606903-23.826662 27.985378-47.171346 44.119847-69.842695-83.765799 0-166.943197 0-250.492054 0C416.280962 244.710374 443.705568 292.198945 466.107787 342.857718z"  ></path>' +
    '' +
    '<path d="M527.617699 779.49531c0 12.072967 0 23.975041 0 36.104289-8.523117 0-16.688077 0-25.169239 0 0-12.04943 0-23.954575 0-36.097126-3.080152-0.348947-5.886057-0.644683-8.6848-0.988514-14.146185-1.740644-27.832905-5.14416-40.732703-11.352559-24.054859-11.577686-39.801495-30.500665-48.862871-55.323003-4.301979-11.783371-6.703679-23.99346-8.148587-36.415374-0.083911-0.721431-0.011256-1.461281-0.011256-2.427282 20.016893 0 39.947827 0 60.273758 0 0.12075 1.679245 0.273223 3.422959 0.366344 5.169743 0.434905 8.134261 2.346441 15.891945 6.188956 23.087834 8.16803 15.296381 21.308305 23.880897 37.875632 27.743878 0.39295 0.092098 0.826831 0.011256 1.223874 0.011256 0.606821-2.325975 0.833995-83.977623 0.223081-89.385796-2.044566-0.636496-4.208858-1.433652-6.435573-1.982144-12.628622-3.111874-25.125237-6.65149-37.235043-11.44261-8.476045-3.353374-16.60519-7.370875-24.143886-12.547781-17.364483-11.923564-27.522844-28.264741-30.330796-49.1627-2.238994-16.667611-0.800225-32.92283 5.650697-48.553833 7.701402-18.662035 21.081131-32.194236 38.534642-41.888016 14.142092-7.853875 29.390377-12.265348 45.413306-14.125719 2.811022-0.326435 5.627161-0.61296 8.757454-0.952698 0-10.892071 0-21.623483 0-32.578999 8.511861 0 16.680914 0 25.205055 0 0 10.904351 0 21.648043 0 32.56365 3.838422 0.593518 7.372921 1.077541 10.884908 1.692548 14.363126 2.515287 28.14399 6.777357 40.86164 14.049994 24.354688 13.927197 38.410821 35.000142 43.077098 62.500473 0.599657 3.536546 0.8913 7.126304 1.300622 10.69355 0.069585 0.607844 0.010233 1.231037 0.010233 2.065032-20.11513 0-40.049135 0-60.308551 0-0.182149-1.482771-0.367367-3.015683-0.558725-4.547573-1.328251-10.642384-5.485945-19.927865-13.380752-27.324322-5.571902-5.220908-12.136412-8.381901-19.86135-8.853645-0.316202-0.019443-0.635473-0.038886-0.949628-0.01535-0.199545 0.01535-0.39295 0.112564-0.822738 0.245593 0 25.038256 0 50.14405 0 75.496461 1.598404 0.436952 3.194762 0.916882 4.812609 1.310855 13.453407 3.282766 26.843368 6.765077 39.692001 12.044314 11.496845 4.723581 22.381753 10.505261 32.097022 18.34481 16.292058 13.145391 25.977651 30.016641 28.883841 50.798966 1.220804 8.731872 1.555425 17.495466 1.070378 26.26213-0.477884 8.635681-3.032056 16.833387-6.569626 24.686239-10.334369 22.934339-27.491121 38.983873-50.218752 49.28959-13.109576 5.944386-26.938536 9.266038-41.208541 10.862395C533.578458 778.868023 530.764366 779.158642 527.617699 779.49531zM527.809057 647.111211c0 27.569916 0 54.686507 0 81.72635 0.402159 0.144286 0.590448 0.26606 0.780783 0.26913 0.527003 0.008186 1.061169 0.013303 1.579985-0.064468 10.187013-1.509377 19.72525-4.735861 28.064172-10.937097 9.844206-7.320733 15.159258-17.069771 15.648398-29.42824 0.541329-13.71128-4.462638-24.258497-16.913205-30.856775C547.847439 652.984988 538.086122 649.994887 527.809057 647.111211zM502.257102 578.585511c0-23.055089 0-46.028313 0-69.159126-0.865717-0.078795-1.591241-0.279363-2.27481-0.183172-3.334955 0.470721-6.756891 0.680499-9.972119 1.598404-20.566408 5.866614-29.017894 23.237237-25.486464 41.648562 1.433652 7.475252 5.848195 12.981662 12.214183 16.984836 7.433296 4.674463 15.72617 7.105838 24.155143 9.15859C501.276774 578.727751 501.712703 578.611094 502.257102 578.585511z"  ></path>' +
    '' +
    '<path d="M527.809057 647.111211c10.277064 2.883677 20.038382 5.873778 29.160133 10.708899 12.450567 6.598278 17.454534 17.145495 16.913205 30.856775-0.488117 12.358469-5.804193 22.107507-15.648398 29.42824-8.339946 6.201236-17.878183 9.42772-28.064172 10.937097-0.518816 0.076748-1.052982 0.071631-1.579985 0.064468-0.190335-0.00307-0.378623-0.124843-0.780783-0.26913C527.809057 701.796694 527.809057 674.681126 527.809057 647.111211z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiudian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M657.92 358.4 560.64 358.4 560.64 256 657.92 256 657.92 358.4 657.92 358.4Z"  ></path>' +
    '' +
    '<path d="M657.92 563.2 560.64 563.2 560.64 460.8 657.92 460.8 657.92 563.2 657.92 563.2Z"  ></path>' +
    '' +
    '<path d="M657.92 768 560.64 768 560.64 665.6 657.92 665.6 657.92 768 657.92 768Z"  ></path>' +
    '' +
    '<path d="M463.36 358.4 366.08 358.4 366.08 256 463.36 256 463.36 358.4 463.36 358.4Z"  ></path>' +
    '' +
    '<path d="M463.36 563.2 366.08 563.2 366.08 460.8 463.36 460.8 463.36 563.2 463.36 563.2Z"  ></path>' +
    '' +
    '<path d="M463.36 768 366.08 768 366.08 665.6 463.36 665.6 463.36 768 463.36 768Z"  ></path>' +
    '' +
    '<path d="M714.24 102.4 714.24 102.4 714.24 0 755.2 40.96 268.8 40.96 309.76 0 309.76 102.4 309.76 143.36 268.8 143.36 122.88 143.36 163.84 102.4 163.84 1024 122.88 983.04 414.72 983.04 373.76 1024 373.76 921.6 373.76 880.64 414.72 880.64 609.28 880.64 650.24 880.64 650.24 921.6 650.24 1024 609.28 983.04 901.12 983.04 860.16 1024 860.16 102.4 901.12 143.36 755.2 143.36 714.24 143.36 714.24 102.4ZM755.2 102.4 755.2 102.4 901.12 102.4 901.12 1024 609.28 1024 609.28 921.6 414.72 921.6 414.72 1024 122.88 1024 122.88 102.4 268.8 102.4 268.8 0 755.2 0 755.2 102.4Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-huoche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M868.701422 744.947867 868.701422 259.882464c0-73.038863-60.178199-133.217062-133.217062-133.217062L291.670142 126.665403c-73.038863 0-133.217062 60.178199-133.217062 133.217062L158.453081 744.947867c0 66.487204 50.714692 123.753555 114.047393 133.217062L155.298578 1024l126.908057 0 126.908057-142.680569L630.900474 881.319431l117.201896 142.680569L868.701422 1024l-107.738389-145.835071C821.141232 865.546919 868.701422 811.677725 868.701422 744.947867L868.701422 744.947867zM297.979147 805.36872c-31.787678 0-60.178199-25.236019-60.178199-60.178199 0-31.787678 25.478673-60.178199 60.178199-60.178199 31.787678 0 60.178199 25.478673 60.178199 60.178199C358.157346 776.735545 332.921327 805.36872 297.979147 805.36872L297.979147 805.36872zM722.866351 805.36872C691.078673 805.36872 662.445498 779.890047 662.445498 744.947867 662.445498 713.402844 687.924171 684.769668 722.866351 684.769668c31.787678 0 60.178199 25.478673 60.178199 60.178199C783.04455 776.735545 757.565877 805.36872 722.866351 805.36872L722.866351 805.36872zM811.677725 485.065403c0 38.096682-28.633175 66.487204-66.487204 66.487204L285.361137 551.552607c-38.096682 0-66.487204-28.633175-66.487204-66.487204l0-145.835071c0-38.096682 28.633175-66.487204 66.487204-66.487204l456.432227 0c38.096682 0 66.487204 28.633175 66.487204 66.487204l0 145.835071L811.677725 485.065403zM811.677725 485.065403"  ></path>' +
    '' +
    '<path d="M434.350711 95.120379l161.607583 0c25.478673 0 47.56019-22.081517 47.56019-47.56019 0-25.478673-22.081517-47.56019-47.56019-47.56019L434.350711 0c-25.478673 0-47.56019 22.081517-47.56019 47.56019C386.790521 73.038863 408.872038 95.120379 434.350711 95.120379L434.350711 95.120379zM434.350711 95.120379"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qunzhong" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M492.006587 243.594448c-17.945895 0-15.175723 5.540343-24.811103 6.925429-9.63538 1.385086 1.927076-1.385086-27.039285 4.155258-28.966361 5.540343-39.203952 42.756998-40.589038 56.547636-1.385086 13.790637-4.81769 53.897906-3.914373 74.553752 2.770172 12.405552-15.958598 12.405552-15.958598 12.405552-17.343684-1.08398-11.80334 52.99459-11.80334 52.99459 2.469066 13.308869 1.385086 19.993413 27.039285 30.291226 12.224888 34.868031 56.728299 52.452599 56.728299 52.452599s1.565749 22.342037 2.047518 38.300635c-2.589508-1.324865 13.730416 40.70948-66.062574 52.512821-79.853211 11.743119-92.740532 43.961421-95.570924 52.031052-11.863562 28.845919-12.104446 118.756057-12.104446 118.756057l462.377793-0.903317c0 0 0.782875-103.459892-14.272406-117.852741-15.055281-14.392849-19.81275-40.227711-99.60574-52.031052-72.626676-9.514938-58.715596-52.633263-59.317808-55.16255 0.120442-6.262997 0.240884-32.880734 0.240884-32.880734s39.986827-21.378499 52.211715-56.24653c19.27076-12.164667 26.617737-13.850859 29.809457-27.882381 0 0 1.686191-52.99459-19.029875-52.99459 0 0-8.611621 1.385086-5.841449-11.020466 2.770172-12.405552 1.264644-52.512821-0.120442-66.303458-1.385086-13.790637 2.649729-53.235474-26.316631-58.715596-19.752529-3.673489-22.040932 1.927076-31.736533 0.54199-9.63538-1.385086-21.137615-36.012232-39.08351-36.012232L492.006587 243.594448z"  ></path>' +
    '' +
    '<path d="M713.560104 620.819572c-0.361327-12.224888-1.08398-30.652552-1.08398-30.652552s-14.392849-13.489532-23.787344-40.227711c-19.692308-7.888967-14.814397-13.007763-16.741473-23.185133 0 0-5.961891-41.432134 7.346977-40.589038 0 0 7.226535-3.613267 5.118796-13.128205-0.722653-15.838156-3.071277-42.937662-1.987297-53.53658 1.08398-10.538697-4.095036-33.663609 18.126558-37.939308 22.221595-4.215479 13.308869-2.107739 20.716067-3.19172 7.407198-1.08398 5.299459-5.299459 19.029875-5.299459l28.544813-4.576805c13.730416 0 22.522701 13.730416 29.929899 14.814397 7.407198 1.08398-5.600565-3.251941 9.514938-0.421548 22.221595 4.215479 19.090096 34.446483 20.174077 44.98518 1.08398 10.538697-0.662432 41.311691-2.770172 50.826629-2.107739 9.514938 9.454717 8.430957 9.454717 8.430957 12.224888-6.925429 6.503881 40.589038 6.503881 40.589038-2.469066 10.71936 8.491179 12.044225-6.262997 21.378499-9.394495 26.738179-34.386262 43.118325-34.386262 43.118325s-2.107739 20.414961-2.228182 25.232651c0.421548 1.927076-11.622677 33.242061 49.561985 42.275229 61.184662 9.033169 71.723359 28.845919 83.285815 39.866384 35.650906 20.655846 42.997883 94.727829 42.997883 94.727829s-120.803576 0-200.536344 0c0 0 1.08398-105.748295-16.380146-125.621266C745.597742 650.930134 737.347448 634.730652 713.560104 620.819572z"  ></path>' +
    '' +
    '<path d="M308.813926 620.819572c0.361327-12.224888 0.662432-30.652552 0.662432-30.652552s19.81275-13.489532 29.207245-40.227711c19.692308-7.888967 13.007763-13.007763 14.934839-23.185133 0 0 5.961891-41.432134-7.346977-40.589038 0 0-10.839802-3.613267-8.732063-13.128205 0.722653-15.838156 2.16796-42.937662 1.08398-53.53658-1.08398-10.538697 4.095036-33.663609-18.126558-37.939308-22.221595-4.215479-13.308869-2.107739-20.716067-3.19172-7.407198-1.08398-2.589508-5.299459-16.319925-5.299459l-28.544813-4.576805c-13.730416 0-22.522701 13.730416-29.929899 14.814397-7.407198 1.08398 5.600565-3.251941-9.514938-0.421548-22.221595 4.215479-19.090096 34.446483-20.174077 44.98518-1.08398 10.538697-1.746413 41.311691 0.361327 50.826629 2.107739 9.514938-4.516584 8.430957-4.516584 8.430957-15.838156 0-14.332628 35.650906-14.332628 35.650906 2.469066 10.71936-3.251941 17.042578 11.502235 26.316631 9.394495 26.738179 34.386262 43.118325 34.386262 43.118325s-1.023759 20.414961-0.903317 25.232651c-0.421548 1.927076 5.299459 32.760292-46.370266 42.275229-61.184662 9.033169-71.723359 28.845919-83.285815 39.866384-45.286286 25.533757-42.997883 95.209598-42.997883 95.209598s120.803576 0 200.536344 0c0 0-0.180663-79.552105 16.380146-126.103035C278.101153 650.930134 285.026582 634.730652 308.813926 620.819572z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qiye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 21.76C241.24928 21.76 21.76 241.24928 21.76 512c0 270.75072 219.48928 490.24 490.24 490.24s490.24-219.48928 490.24-490.24C1002.24 241.24928 782.75072 21.76 512 21.76zM771.07712 774.36928 248.07424 774.36928l0-66.85696 89.27744 0L337.35168 490.73152l69.37088 0c10.496 0 15.68768 1.71008 15.68768 5.13536 0 3.4816-0.96768 7.64416-3.02592 12.4928-3.9936 10.04032-5.9904 25.67168-5.9904 46.66368l0 152.48384 77.184 0L490.57792 426.95168l70.62528 0c11.2384 0 16.77312 1.7664 16.77312 5.41696 0 3.65056-0.79872 7.53152-2.33984 11.58144-3.9936 10.15296-5.9904 25.9584-5.9904 47.40608l0 46.15168 154.99776 0 0 64.86016-154.99776 0 0 105.1392 201.43104 0L771.07712 774.36928zM749.45536 508.35968c-103.82336-48.2048-181.80608-111.18592-234.12224-188.93824C465.024 391.5264 384.81408 454.85056 274.60096 509.55776c-22.13376-27.9552-40.96-48.37376-56.64768-61.32736 133.08928-46.60736 220.76928-124.93312 262.98368-235.08992 55.50592 14.20288 84.88448 22.07744 88.13568 23.7312 3.2512 1.59744 4.79232 3.82464 4.79232 6.67648 0 3.65056-2.10944 6.90176-6.61504 9.69728-4.44928 2.85184-7.93088 5.4784-10.27072 7.93088 24.4736 40.04864 58.41408 74.96192 102.00064 104.79616 43.4688 29.7216 92.35968 51.28704 147.06688 64.63488C789.10464 449.65888 770.2784 475.55584 749.45536 508.35968z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tag" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M744.031611 959.184809l-463.557708 0c-54.168714 0-98.237395-44.068681-98.237395-98.237395l0-56.452733c0-20.345374 16.493649-36.839023 36.839023-36.839023s36.839023 16.493649 36.839023 36.839023l0 56.452733c0 13.313214 11.247158 24.559349 24.559349 24.559349l463.557708 0c13.313214 0 24.559349-11.246135 24.559349-24.559349l0-697.894827c0-13.31219-11.246135-24.559349-24.559349-24.559349l-463.557708 0c-13.31219 0-24.559349 11.247158-24.559349 24.559349l0 503.066537c0 20.345374-16.493649 36.839023-36.839023 36.839023s-36.839023-16.493649-36.839023-36.839023L182.236508 163.052586c0-54.168714 44.068681-98.237395 98.237395-98.237395l463.557708 0c54.168714 0 98.237395 44.068681 98.237395 98.237395l0 697.894827C842.269006 915.116127 798.199301 959.184809 744.031611 959.184809z"  ></path>' +
    '' +
    '<path d="M638.119419 258.049171l0 251.733325-251.733325 0 0-251.733325L638.119419 258.049171M662.678768 192.557574l-300.852022 0c-22.512736 0-40.932248 18.419512-40.932248 40.932248l0 300.852022c0 22.512736 18.419512 40.932248 40.932248 40.932248l300.852022 0c22.512736 0 40.932248-18.419512 40.932248-40.932248l0-300.852022C703.611016 210.977086 685.191504 192.557574 662.678768 192.557574L662.678768 192.557574z"  ></path>' +
    '' +
    '<path d="M512.252757 704.804191c16.927531 0 30.699186 13.771655 30.699186 30.699186 0 16.927531-13.771655 30.699186-30.699186 30.699186-16.927531 0-30.699186-13.771655-30.699186-30.699186C481.553571 718.575846 495.325225 704.804191 512.252757 704.804191M512.252757 639.312594c-53.124941 0-96.190783 43.065841-96.190783 96.190783s43.065841 96.190783 96.190783 96.190783c53.124941 0 96.190783-43.065841 96.190783-96.190783S565.376675 639.312594 512.252757 639.312594L512.252757 639.312594z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jipiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M984.615385 708.923077l0-98.461538-393.846154-256 0-277.661538c0-43.527692-36.48-76.8-78.769231-76.8C469.713846 0 433.230769 33.275385 433.230769 76.8L433.230769 354.461538l-393.846154 256 0 98.461538L433.230769 590.769231l0 279.635385-118.153846 76.798462L315.076923 1024l196.923077-39.384615 196.923077 39.384615 0-76.796923-118.153846-76.798462L590.769231 590.769231 984.615385 708.923077 984.615385 708.923077z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiayouqiachongzhi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M800.131 467.857h-50.629V306.055l-103.566-55.554v-78.915c0-15.194-12.316-27.511-27.511-27.511H248.543c-15.194 0-27.512 12.316-27.512 27.511V789.93h-46.739v53.821h518.384V789.93h-46.74V506.806h64.618v251.533c0 49.396 40.184 89.582 89.577 89.582s89.577-40.187 89.577-89.582V557.434c0-49.392-40.185-89.577-89.577-89.577zM267.772 195.064h325.76V440.35h-325.76V195.064z m258.195 420.742v33.503h-75.73v84.452h-33.505v-84.452h-75.73v-33.503h75.73v-33.504h-75.73v-33.507h41.328l-16.735-50.201h39.174l16.735 50.201h23.966l16.735-50.201h39.173l-16.735 50.201h41.325v33.507h-75.73v33.504h75.729z m184.587-147.949h-64.618V294.699l64.618 34.661v138.497zM850.76 758.339c0 27.92-22.711 50.634-50.629 50.634-27.916 0-50.629-22.714-50.629-50.634V506.806h50.629c27.918 0 50.629 22.712 50.629 50.628v200.905z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-search" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M872.834 819.031l-0.021-0.020v0.020h0.021c6.611 7.724 9.929 16.273 9.929 25.645 0 10.485-3.728 19.446-11.186 26.902-6.683 6.903-16.034 11.188-26.387 11.188-0.189 0-0.376-0.002-0.564-0.006-4.4 0-8.664-0.7-12.804-2.079-6.214-2.076-11.451-5.687-15.438-10.387l0.112 0.893-204.607-206.068c-49.128 34.771-104.085 52.135-164.831 52.135-6.077 0-12.277-0.268-18.622-0.803-12.503-1.101-23.947-3.154-35.015-6.127-34.433-2.314-79.83-21.736-117.236-50.923-22.673-13.314-53.59-46.129-76.785-86.976-18.876-31.629-31.618-69.022-35.597-108.993 2.099 24.518-2.324-3.171-2.664-31.839 0.219 9.819 0.022 3.726 0.022-2.411 0-17.23 1.554-34.097 4.529-50.469 7.223-45.086 25.601-86.609 52.198-121.533 13.217-24.748 55.417-62.558 105.78-85.633-26.24 10.779 0.95-4.114 31.044-14.598 27.503-9.971 59.247-15.738 92.338-15.738 0.003 0 0.006 0 0.007 0 13.266 0 25.953 0.824 38.128 2.493 32.566 4.409 63.753 14.337 93.58 29.785 48.239 25.143 87.102 62.529 113.335 108.106-9.518-21.469 10.215 10.521 23.749 47.495 13.533 36.974 19.486 74.485 17.818 112.552-2.204 63.464-24.018 120.564-65.441 171.319l205.41 206.068h-0.803zM690.599 440.818c0.21-3.697 0.33-8.022 0.33-12.373 0-31.328-6.205-61.208-17.456-88.475-13.231-34.958-34.583-65.86-61.735-90.484 21.143 20.301 6.93 4.997-9.343-8.537-30.272-25.39-67.305-43.731-107.998-51.99 25.734 4.367-9.068-3.862-45.794-3.862-9.87 0-19.603 0.595-29.162 1.749-1.639-0.081-4.336 0.248-6.931 0.839l-4.358 0.695c-44.686 7.108-84.078 25.889-116.086 53.095-23.983 14.957-55.634 55.983-72.075 104.063-2.047-6.829-13.232 30.701-15.189 72.084-1.936 41.383 5.645 79.738 22.782 115.043 20.889 45.873 54.812 82.768 97.015 106.791-0.152 5.549 43.151 25.628 90.828 31.684 1.539 3.059 37.155 4.997 73.039-1.081 30.977-5.587 58.609-16.326 83.316-31.388 8.622-1.65 39.887-25.597 64.428-55.302-9.505 15.858 17.567-17.681 35.063-56.467-25.001 44.533-14.64 28.672-6.36 11.575v0.021c15.865-30.484 25.376-66.489 25.885-104.668z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shexiangji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M897.018 897.019L732.01 759.512v27.502c0 60.747-49.258 110.005-110.005 110.005H181.983c-60.747 0-110.005-49.258-110.005-110.005V567.003c0-41.523 23.288-77.236 57.263-95.957-34.815-30.266-57.263-74.32-57.263-124.054 0-91.127 73.882-165.008 165.008-165.008s165.008 73.881 165.008 165.008c0 42.457-16.487 80.785-42.803 110.005h100.87c-35.75-34.937-58.067-83.578-58.067-137.506 0-106.307 86.185-192.51 192.51-192.51s192.509 86.203 192.509 192.51c0 70.042-37.758 130.743-93.676 164.41 23.474 20.178 38.673 49.715 38.673 83.102l165.008-110.006c30.38 0 55.003 24.624 55.003 55.003v330.016c0 30.407-24.625 55.003-55.003 55.003z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-baitiao" viewBox="0 0 1041 1024">' +
    '' +
    '<path d="M651.264 559.104h-98.816v-32.768h98.816c15.36 0 28.16-12.8 28.16-28.16s-12.8-28.16-28.16-28.16h-76.288l86.528-123.904c8.704-12.8 5.632-30.208-7.168-39.424-12.8-8.704-30.208-5.632-39.424 7.168L520.704 449.024 426.496 313.856c-8.704-12.8-26.624-15.872-39.424-7.168-12.8 8.704-15.872 26.624-7.168 39.424l86.528 123.904H390.144c-15.36 0-28.16 12.8-28.16 28.16s12.8 28.16 28.16 28.16H490.496v32.768H390.144c-15.36 0-28.16 12.8-28.16 28.16s12.8 28.16 28.16 28.16H490.496v57.344c0 16.896 13.824 30.72 30.72 30.72s30.72-13.824 30.72-30.72v-57.344h98.816c15.36 0 28.16-12.8 28.16-28.16s-12.288-28.16-27.648-28.16z"  ></path>' +
    '' +
    '<path d="M968.192 809.984H73.216c-40.448 0-73.216-32.768-73.216-73.216V268.288c0-40.448 32.768-73.216 73.216-73.216h895.488c40.448 0 73.216 32.768 73.216 73.216v467.968c-0.512 40.96-33.28 73.728-73.728 73.728zM73.216 246.272c-12.288 0-22.016 9.728-22.016 22.016v467.968c0 12.288 9.728 22.016 22.016 22.016h895.488c12.288 0 22.016-9.728 22.016-22.016V268.288c0-12.288-9.728-22.016-22.016-22.016H73.216z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)