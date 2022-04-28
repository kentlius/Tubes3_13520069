--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2 (Ubuntu 14.2-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sicknesses; Type: TABLE; Schema: public; Owner: efutmwtubwzlxj
--

CREATE TABLE "public"."sicknesses" (
    "id" bigint NOT NULL,
    "name" "text",
    "dna" "text"
);


ALTER TABLE public.sicknesses OWNER TO efutmwtubwzlxj;

--
-- Name: sicknesses_id_seq; Type: SEQUENCE; Schema: public; Owner: efutmwtubwzlxj
--

CREATE SEQUENCE "public"."sicknesses_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sicknesses_id_seq OWNER TO efutmwtubwzlxj;

--
-- Name: sicknesses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: efutmwtubwzlxj
--

ALTER SEQUENCE "public"."sicknesses_id_seq" OWNED BY "public"."sicknesses"."id";


--
-- Name: users; Type: TABLE; Schema: public; Owner: efutmwtubwzlxj
--

CREATE TABLE "public"."users" (
    "id" bigint NOT NULL,
    "date" "text",
    "name" "text",
    "prediction" "text",
    "percentage" bigint,
    "is_sick" boolean,
    "dna" "text",
    "method" "text"
);


ALTER TABLE public.users OWNER TO efutmwtubwzlxj;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: efutmwtubwzlxj
--

CREATE SEQUENCE "public"."users_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO efutmwtubwzlxj;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: efutmwtubwzlxj
--

ALTER SEQUENCE "public"."users_id_seq" OWNED BY "public"."users"."id";


--
-- Name: sicknesses id; Type: DEFAULT; Schema: public; Owner: efutmwtubwzlxj
--

ALTER TABLE ONLY "public"."sicknesses" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."sicknesses_id_seq"'::"regclass");


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: efutmwtubwzlxj
--

ALTER TABLE ONLY "public"."users" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."users_id_seq"'::"regclass");


--
-- Data for Name: sicknesses; Type: TABLE DATA; Schema: public; Owner: efutmwtubwzlxj
--

COPY "public"."sicknesses" ("id", "name", "dna") FROM stdin;
1	Flu	ACATCGATCACTACGTAGCCATGC
2	HIV	ACGTGCTTTCAGAGACCTTTTGAGA
3	AIDS	ACGTGATGTCTGAGCGATCA
4	Demam	ATCGACTGATCGTGGGCGATATA
5	Down Syndrome	ATCATCGATCGATGCTGAC
6	Covid19	ACGTACGCTCGATCAGCTT
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: efutmwtubwzlxj
--

COPY "public"."users" ("id", "date", "name", "prediction", "percentage", "is_sick", "dna", "method") FROM stdin;
1	28/4/2022	Kevin	HIV	52	f	ACGCGATCACGATGCTAGCTAGTCAGCTATCATGCTAGCTGATGCATCTAGTCAGTCAGT	Knuth-Morris-Pratt
2	28/4/2022	Kent	AIDS	40	f	ATCGTACGCGTAGTAGCCAGCTTACGATCGCGTACGACTGCATGCGTCGATCGTGTACGAT	Boyer-Moore
3	28/4/2022	Afrizal	Covid19	47	f	CGATCGAGACAGCTAGCTAGTACGATCTAAATGTCATCAT	Knuth-Morris-Pratt
4	28/4/2022	Afrizal	Covid19	47	f	CGATCGAGACAGCTAGCTAGTACGATCTAAATGTCATCAT	Boyer-Moore
5	28/4/2022	Kent	Demam	47	f	ATCGTACGCGTAGTAGCCAGCTTACGATCGCGTACGACTGCATGCGTCGATCGTGTACGAT	Knuth-Morris-Pratt
6	28/4/2022	Kent	Demam	47	f	ATCGTACGCGTAGTAGCCAGCTTACGATCGCGTACGACTGCATGCGTCGATCGTGTACGAT	Boyer-Moore
7	28/4/2022	Afrizal	Demam	47	f	CGATCGAGACAGCTAGCTAGTACGATCTAAATGTCATCAT	Boyer-Moore
\.


--
-- Name: sicknesses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: efutmwtubwzlxj
--

SELECT pg_catalog.setval('"public"."sicknesses_id_seq"', 6, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: efutmwtubwzlxj
--

SELECT pg_catalog.setval('"public"."users_id_seq"', 7, true);


--
-- Name: sicknesses sicknesses_pkey; Type: CONSTRAINT; Schema: public; Owner: efutmwtubwzlxj
--

ALTER TABLE ONLY "public"."sicknesses"
    ADD CONSTRAINT "sicknesses_pkey" PRIMARY KEY ("id");


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: efutmwtubwzlxj
--

ALTER TABLE ONLY "public"."users"
    ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");


--
-- PostgreSQL database dump complete
--

