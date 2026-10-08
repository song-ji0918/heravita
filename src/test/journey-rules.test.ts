import { describe, expect, it } from 'vitest';
import { journeys } from '@/lib/journeys';
import { consultationSchema } from '@/lib/consultation-schema';

describe('Approved V1.1 journey periods', () => {
  it('Discovery is 5 days / 4 nights with 28 days of follow-up', () => {
    const journey = journeys.find(j => j.slug === 'discover');
    expect([journey?.days, journey?.nights, journey?.follow]).toEqual([5, 4, '28 天']);
  });
  it('Reset is 7 days / 6 nights with 90 days of follow-up', () => {
    const journey = journeys.find(j => j.slug === 'reset');
    expect([journey?.days, journey?.nights, journey?.follow]).toEqual([7, 6, '90 天']);
  });
  it('Rebuilding is 7 days / 6 nights with 6 months of follow-up', () => {
    const journey = journeys.find(j => j.slug === 'rebuild');
    expect([journey?.days, journey?.nights, journey?.follow]).toEqual([7, 6, '6 个月']);
  });
});

describe('Private concierge validation', () => {
  const request = {title:'女士',name:'Test',stage:'discover',arrival_date:'',guests:2,partner_consultation:true,contact_method:'email',contact:'test@example.com',message:'',consent:true};
  it('accepts the preferred stage and companion consultation request', () => {
    const result = consultationSchema.parse(request);
    expect(result.stage).toBe('discover');
    expect(result.partner_consultation).toBe(true);
    expect(result.guests).toBe(2);
  });
  it('rejects invalid email and missing consent', () => {
    expect(consultationSchema.safeParse({...request,contact:'invalid'}).success).toBe(false);
    expect(consultationSchema.safeParse({...request,consent:false}).success).toBe(false);
  });
  it('keeps China inquiries attached to everyday life support', () => {
    const result=consultationSchema.parse({...request,destination:'china',stage:'local_support'});
    expect([result.destination,result.stage]).toEqual(['china','local_support']);
  });
  it('keeps Europe inquiries attached to Life Flourishing', () => {
    const result=consultationSchema.parse({...request,destination:'europe',stage:'flourish'});
    expect([result.destination,result.stage]).toEqual(['europe','flourish']);
  });
  it('keeps USA inquiries attached to medical coordination', () => {
    const result=consultationSchema.parse({...request,destination:'usa',stage:'medical_coordination'});
    expect([result.destination,result.stage]).toEqual(['usa','medical_coordination']);
  });
  it('rejects unknown destinations and mismatched regional purposes', () => {
    expect(consultationSchema.safeParse({...request,destination:'unknown'}).success).toBe(false);
    expect(consultationSchema.safeParse({...request,destination:'china',stage:'flourish'}).success).toBe(false);
    expect(consultationSchema.safeParse({...request,destination:'phuket',stage:'medical_coordination'}).success).toBe(false);
  });
});