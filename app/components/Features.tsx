import Image from 'next/image';
import Link from 'next/link';

const Features = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Build Your Real Estate Empire Without Limits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use rental income, not personal income — grow your portfolio with every successful property
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <Image
                src="/icons/calculator.svg"
                alt="Calculator"
                width={24}
                height={24}
                className="text-indigo-600"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Simple DSCR Calculation</h3>
            <p className="text-gray-600">
              Property performance is what matters most. Credit history only affects your rate, not approval.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <Image
                src="/icons/shield.svg"
                alt="Shield"
                width={24}
                height={24}
                className="text-indigo-600"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Business Protection</h3>
            <p className="text-gray-600">
              Purchase through your LLC or corporation. Keep investments separate from personal finances.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <Image
                src="/icons/chart.svg"
                alt="Chart"
                width={24}
                height={24}
                className="text-indigo-600"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Unlimited Growth</h3>
            <p className="text-gray-600">
              Scale your portfolio without personal income restrictions. The property's performance is what counts.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-pink-100 rounded-3xl overflow-hidden text-navy-900">
          <div className="max-w-6xl mx-auto p-4 md:p-8 lg:px-4">
            {/* Mobile Layout */}
            <div className="lg:hidden space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-8 mt-4 text-[#1a1060]">How DSCR Loans Work</h3>
                <ul className="space-y-6">
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white text-[#1a1060] flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
                    <p className="text-lg text-[#1a1060]">Find your investment property</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white text-[#1a1060] flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
                    <p className="text-lg text-[#1a1060]">We calculate the Debt Service Coverage Ratio</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white text-[#1a1060] flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
                    <p className="text-lg text-[#1a1060]">Get approved based on current or projected rental income</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white text-[#1a1060] flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
                    <p className="text-lg text-[#1a1060]">Close quickly and move on to your next deal</p>
                  </li>
                </ul>

                <div className="mt-8 pt-4 border-t border-[#1a1060]/10">
                  <div className="text-[#1a1060] space-y-4">
                    <p className="text-lg font-semibold">Our DSCR loan program offers a streamlined path to financing your investment property:</p>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-base">
                      <ul className="list-disc ml-4 space-y-2">
                        <li>Protect your assets by purchasing through an LLC - full entity protection with great rates</li>
                        <li>Use actual rental income from existing tenants or projected rental income from a market analysis</li>
                        <li>No tax returns or personal income verification needed - property performance is what matters</li>
                        <li>Minimum credit score of 640 required (affects rate only, not approval)</li>
                        <li>Down payments from 20-25% depending on property type and DSCR ratio</li>
                      </ul>
                      <ul className="list-disc ml-4 space-y-2 mt-4 md:mt-0">
                        <li>Close in as little as 21 days with our streamlined process</li>
                        <li>Interest rates based on DSCR ratio, credit score, and down payment amount</li>
                        <li>Available for both purchase and refinance transactions</li>
                        <li>No limit on number of properties - scale your portfolio based on performance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 md:p-8">
                <h4 className="text-2xl font-bold mb-6 text-[#1a1060]">What is DSCR?</h4>
                <p className="text-lg text-[#1a1060] mb-8">
                  The DSCR is a tool to help lenders understand a property's ability to pay back a loan based on its rental income. Unlike traditional loans, your personal income isn't considered.
                </p>
                
                <div className="space-y-8">
                  <div>
                    <h5 className="text-xl font-semibold mb-6 text-[#1a1060]">For Single Family Properties:</h5>
                    <div className="space-y-6">
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="font-mono text-2xl font-bold whitespace-nowrap text-[#1a1060]">DSCR =</div>
                        <div className="flex flex-col items-center flex-grow w-full md:w-auto">
                          <span className="text-xl text-[#1a1060]">Monthly Rent</span>
                          <div className="w-full h-0.5 bg-[#1a1060] my-2"></div>
                          <span className="text-xl text-[#1a1060]">PITIA</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-[#1a1060] space-y-2">
                          <div className="text-lg font-semibold mb-3">Payment Components:</div>
                          <div className="ml-2">
                            <div>P = Principal</div>
                            <div>I = Interest</div>
                            <div>T = Taxes</div>
                            <div>I = Insurance</div>
                            <div>A = Association dues</div>
                          </div>
                        </div>
                        
                        <div className="text-[#1a1060] space-y-2">
                          <div className="text-lg font-semibold mb-3">Target Ratios:</div>
                          <div className="ml-2">
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-[#1a1060] rounded-full"></div>
                              <span>≥ 0.8 (Can qualify in some cases)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-[#1a1060] rounded-full"></div>
                              <span>≥ 1.0 (Standard approval)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-[#1a1060] rounded-full"></div>
                              <span>≥ 1.25 (Best terms available)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-xl font-semibold mb-6 text-[#1a1060]">For Commercial Properties:</h5>
                    <div className="space-y-6">
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="font-mono text-2xl font-bold whitespace-nowrap text-[#1a1060]">DSCR =</div>
                        <div className="flex flex-col items-center flex-grow w-full md:w-auto">
                          <span className="text-xl text-[#1a1060]">Net Operating Income</span>
                          <div className="w-full h-0.5 bg-[#1a1060] my-2"></div>
                          <span className="text-xl text-[#1a1060]">Annual Debt Obligations</span>
                        </div>
                      </div>

                      <div className="text-[#1a1060] space-y-2">
                        <div className="text-lg font-semibold mb-3">Target Ratios:</div>
                        <div className="ml-2">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#1a1060] rounded-full"></div>
                            <span>≥ 0.8 (Minimum)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#1a1060] rounded-full"></div>
                            <span>≥ 1.0 (Standard)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#1a1060] rounded-full"></div>
                            <span>≥ 1.25 (Best Terms)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/50 rounded-xl">
                  <h5 className="text-xl font-semibold mb-4 text-[#1a1060]">What Affects Your Terms?</h5>
                  <ul className="space-y-3 text-[#1a1060]">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#1a1060] rounded-full"></div>
                      <span>Property's DSCR ratio (primary factor)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#1a1060] rounded-full"></div>
                      <span>Down payment amount (20-25% typical)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#1a1060] rounded-full"></div>
                      <span>Credit score (affects rate, not approval)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-8 mt-4 text-[#1a1060]">How DSCR Loans Work</h3>
                <ul className="space-y-6">
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white text-[#1a1060] flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
                    <p className="text-lg text-[#1a1060]">Find your investment property</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white text-[#1a1060] flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
                    <p className="text-lg text-[#1a1060]">We calculate the Debt Service Coverage Ratio</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white text-[#1a1060] flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
                    <p className="text-lg text-[#1a1060]">Get approved based on current or projected rental income</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white text-[#1a1060] flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
                    <p className="text-lg text-[#1a1060]">Close quickly and move on to your next deal</p>
                  </li>
                </ul>

                <div className="mt-8 pt-4 border-t border-[#1a1060]/10">
                  <div className="text-[#1a1060] space-y-4">
                    <p className="text-lg font-semibold">Our DSCR loan program offers a streamlined path to financing your investment property:</p>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-base">
                      <ul className="list-disc ml-4 space-y-2">
                        <li>Protect your assets by purchasing through an LLC - full entity protection with great rates</li>
                        <li>Use actual rental income from existing tenants or projected rental income from a market analysis</li>
                        <li>No tax returns or personal income verification needed - property performance is what matters</li>
                        <li>Minimum credit score of 640 required (affects rate only, not approval)</li>
                        <li>Down payments from 20-25% depending on property type and DSCR ratio</li>
                      </ul>
                      <ul className="list-disc ml-4 space-y-2 mt-4 md:mt-0">
                        <li>Close in as little as 21 days with our streamlined process</li>
                        <li>Interest rates based on DSCR ratio, credit score, and down payment amount</li>
                        <li>Available for both purchase and refinance transactions</li>
                        <li>No limit on number of properties - scale your portfolio based on performance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 mt-8 lg:mt-0">
                <h4 className="text-2xl font-bold mb-6 text-[#1a1060]">What is DSCR?</h4>
                <p className="text-lg text-[#1a1060] mb-8">
                  The DSCR is a tool to help lenders understand a property's ability to pay back a loan based on its rental income. Unlike traditional loans, your personal income isn't considered.
                </p>
                
                <div className="space-y-8">
                  <div>
                    <h5 className="text-xl font-semibold mb-6 text-[#1a1060]">For Single Family Properties:</h5>
                    <div className="space-y-6">
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="font-mono text-2xl font-bold whitespace-nowrap text-[#1a1060]">DSCR =</div>
                        <div className="flex flex-col items-center flex-grow w-full md:w-auto">
                          <span className="text-xl text-[#1a1060]">Monthly Rent</span>
                          <div className="w-full h-0.5 bg-[#1a1060] my-2"></div>
                          <span className="text-xl text-[#1a1060]">PITIA</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-[#1a1060] space-y-2">
                          <div className="text-lg font-semibold mb-3">Payment Components:</div>
                          <div className="ml-2">
                            <div>P = Principal</div>
                            <div>I = Interest</div>
                            <div>T = Taxes</div>
                            <div>I = Insurance</div>
                            <div>A = Association dues</div>
                          </div>
                        </div>
                        
                        <div className="text-[#1a1060] space-y-2">
                          <div className="text-lg font-semibold mb-3">Target Ratios:</div>
                          <div className="ml-2">
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-[#1a1060] rounded-full"></div>
                              <span>≥ 0.8 (Can qualify in some cases)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-[#1a1060] rounded-full"></div>
                              <span>≥ 1.0 (Standard approval)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-[#1a1060] rounded-full"></div>
                              <span>≥ 1.25 (Best terms available)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-xl font-semibold mb-6 text-[#1a1060]">For Commercial Properties:</h5>
                    <div className="space-y-6">
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="font-mono text-2xl font-bold whitespace-nowrap text-[#1a1060]">DSCR =</div>
                        <div className="flex flex-col items-center flex-grow w-full md:w-auto">
                          <span className="text-xl text-[#1a1060]">Net Operating Income</span>
                          <div className="w-full h-0.5 bg-[#1a1060] my-2"></div>
                          <span className="text-xl text-[#1a1060]">Annual Debt Obligations</span>
                        </div>
                      </div>

                      <div className="text-[#1a1060] space-y-2">
                        <div className="text-lg font-semibold mb-3">Target Ratios:</div>
                        <div className="ml-2">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#1a1060] rounded-full"></div>
                            <span>≥ 0.8 (Minimum)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#1a1060] rounded-full"></div>
                            <span>≥ 1.0 (Standard)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#1a1060] rounded-full"></div>
                            <span>≥ 1.25 (Best Terms)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/50 rounded-xl">
                  <h5 className="text-xl font-semibold mb-4 text-[#1a1060]">What Affects Your Terms?</h5>
                  <ul className="space-y-3 text-[#1a1060]">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#1a1060] rounded-full"></div>
                      <span>Property's DSCR ratio (primary factor)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#1a1060] rounded-full"></div>
                      <span>Down payment amount (20-25% typical)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#1a1060] rounded-full"></div>
                      <span>Credit score (affects rate, not approval)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study Section */}
        <div className="mt-20 max-w-4xl mx-auto bg-[#fff9e7] rounded-3xl shadow-xl overflow-hidden">
          <div className="p-6 md:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Image
                  src="/icons/chart.svg"
                  alt="Success Story"
                  width={24}
                  height={24}
                  className="text-indigo-600"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1a1060]">Real Success Story: Breaking Free from DTI Limits</h3>
                <p className="text-gray-600">How one investor discovered the power of DSCR loans</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-indigo-600 font-semibold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1060] mb-2">Starting Point</h4>
                  <p className="text-gray-600">Michael had already purchased two rental properties using traditional financing. Despite good income and credit, his debt-to-income ratio was maxed out, preventing him from expanding his portfolio further.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-indigo-600 font-semibold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1060] mb-2">DSCR Solution</h4>
                  <p className="text-gray-600">We helped Michael form an LLC and secure DSCR financing based on projected rental income. His personal DTI was irrelevant - only the property's performance mattered for approval.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-indigo-600 font-semibold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1060] mb-2">12-Month Growth</h4>
                  <p className="text-gray-600">With a strong DSCR track record, Michael rapidly expanded his portfolio from 2 to 7 properties in just 12 months. Now that he's broken free from DTI constraints, the sky's the limit - he can continue scaling his portfolio as fast as he can find profitable properties.</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/50 rounded-xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="text-lg font-semibold text-[#1a1060]">Portfolio Growth</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-[#1a1060]">Unlimited</span>
                      <span className="text-[#1a1060]">growth potential</span>
                    </div>
                  </div>
                  <Link
                    href="/#get-started"
                    className="w-full md:w-auto bg-[#1a1060] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a2070] transition-colors text-center"
                  >
                    Start Your Growth Story
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 